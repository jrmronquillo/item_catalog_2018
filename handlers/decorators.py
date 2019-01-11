from functools import wraps
from flask import redirect, render_template, flash, url_for
from flask import session as login_session
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database_setup import Base, Categories, CategoryItem

engine = create_engine('sqlite:///catalogwithusers.db', connect_args={'check_same_thread':False})
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()


def login_required(func):
    """
    Validation that user is logged in before accessing function,
    if user is not logged in, redirect to login page
    """
    @wraps(func)
    def login(*args, **kwargs):
        if 'username' not in login_session:
            return redirect('/login')
        else:
            return func(*args, **kwargs)
    return login


def category_exists(function):
    """
    Validation that Category exists in DB
    """
    @wraps(function)
    def wrapper(category_id):
        categoryToDelete = session.query(Categories).filter_by(
                           id=category_id).first()
        if categoryToDelete:
            return function(category_id)
        else:
            print "category not found"
            flash("Failed to show/modify Category because Category ID was "
                  "not found")
            # return render_template('404.html'), 404
            return redirect(url_for('showCategories'))
    return wrapper


def item_exists(function):
    """
    Validation that Item Exists, otherwise display 404 page
    """
    @wraps(function)
    def wrapper(category_id, categoryitem_id):
        categoryitemToDelete = session.query(
            CategoryItem).filter_by(
                id=categoryitem_id).filter_by(category_id=category_id).first()
        if categoryitemToDelete:
            return function(category_id, categoryitem_id)
        else:
            print "item not found"
            flash("Failed to show/modify Item because Item ID was not found")
            return redirect(url_for('showItems', category_id=category_id))
            # return render_template('404.html'), 404
    return wrapper


def user_created_category(function):
    """
    Validation that user is the category creator by comparing login session
    username to category creator name in DB,
    if not matching, redirect and flash error message
    """
    @wraps(function)
    def wrapper(category_id):
        categoryToDelete = session.query(Categories).filter_by(
                           id=category_id).first()
        if categoryToDelete.user.name == login_session['username']:
            return function(category_id)
        else:
            flash("Only Category Creator can edit and/or delete Category.")
            return redirect(url_for('showCategories'))
    return wrapper


def user_created_item(function):
    """
    Validation that the user is the item creator by compairing login session
    username to item creator name in DB,
    if not matching, redirect and flash error message
    """
    @wraps(function)
    def wrapper(category_id, categoryitem_id):
        categoryItemToModify = session.query(CategoryItem).filter_by(
            id=categoryitem_id).filter_by(category_id=category_id).first()
        print categoryItemToModify.user.name
        if categoryItemToModify.user.name == login_session['username']:
            print 'user matches!'
            return function(category_id, categoryitem_id)
        else:
            flash("Only Item Creator can edit and/or delete item.")
            return redirect(url_for('showItems'))
    return wrapper
