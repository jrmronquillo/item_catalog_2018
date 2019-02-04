from flask import (Flask, render_template, request, redirect, jsonify, url_for,
                   flash)
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database_setup import Base, Categories, CategoryItem, User

from flask import session as login_session
import random
import string

from oauth2client.client import flow_from_clientsecrets
from oauth2client.client import FlowExchangeError
import httplib2
import json
from flask import make_response
import requests

import datetime

from handlers.decorators import (login_required, category_exists, item_exists,
                                 user_created_category, user_created_item)
app = Flask(__name__)


CLIENT_ID = json.loads(
    open('client_secrets.json', 'r').read())['web']['client_id']
APPLICATION_NAME = "Catalog Application"


engine = create_engine('sqlite:///catalogwithusers.db', connect_args={'check_same_thread':False})
# engine = create_engine(
#   'postgresql+psycopg2://catalog:catalog@localhost/catalog')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()


# Create anti-forgery state token
@app.route('/login')
def showLogin():
    state = ''.join(random.choice(string.ascii_uppercase + string.digits)
                    for x in xrange(32))
    login_session['state'] = state
    return render_template('login.html', STATE=state)
    # return "The current session state is %s" % login_session['state']


@app.route('/gconnect', methods=['POST'])
def gconnect():
    # Validate state token
    if request.args.get('state') != login_session['state']:
        response = make_response(json.dumps('Invalid state parameter.'), 401)
        response.headers['Content-Type'] = 'application/json'
        return response
    # Obtain authorization code
    code = request.data

    try:
        # Upgrade the authorization code into a credentials object
        oauth_flow = flow_from_clientsecrets('client_secrets.json', scope='')
        oauth_flow.redirect_uri = 'postmessage'
        credentials = oauth_flow.step2_exchange(code)
    except FlowExchangeError:
        response = make_response(
            json.dumps('Failed to upgrade the authorization code.'), 401)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Check that the access token is valid.
    access_token = credentials.access_token
    url = ('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=%s'
           % access_token)
    h = httplib2.Http()
    result = json.loads(h.request(url, 'GET')[1])
    # If there was an error in the access token info, abort.
    if result.get('error') is not None:
        response = make_response(json.dumps(result.get('error')), 500)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Verify that the access token is used for the intended user.
    gplus_id = credentials.id_token['sub']
    if result['user_id'] != gplus_id:
        response = make_response(
            json.dumps("Token's user ID doesn't match given user ID."), 401)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Verify that the access token is valid for this app.
    if result['issued_to'] != CLIENT_ID:
        response = make_response(
            json.dumps("Token's client ID does not match app's."), 401)
        print "Token's client ID does not match app's."
        response.headers['Content-Type'] = 'application/json'
        return response

    stored_credentials = login_session.get('credentials')
    stored_gplus_id = login_session.get('gplus_id')
    if stored_credentials is not None and gplus_id == stored_gplus_id:
        response = make_response(json.dumps('Current user is '
                                            'already connected.'),
                                 200)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Store the access token in the session for later use.
    login_session['access_token'] = credentials.access_token
    login_session['gplus_id'] = gplus_id

    # Get user info
    userinfo_url = "https://www.googleapis.com/oauth2/v1/userinfo"
    params = {'access_token': credentials.access_token, 'alt': 'json'}
    answer = requests.get(userinfo_url, params=params)

    data = answer.json()

    login_session['username'] = data['name']
    login_session['picture'] = data['picture']
    login_session['email'] = data['email']

    # see if user exists, if it doens't make a new one
    user_id = getUserID(login_session['email'])
    if not user_id:
        user_id = createUser(login_session)
    login_session['user_id'] = user_id

    output = ''
    output += '<h1>Welcome, '
    output += login_session['username']
    output += '!</h1>'
    output += '<img src="'
    output += login_session['picture']
    output += ' " style = "width: 300px; height: 300px;border-radius: 150px;"'
    output += '"-webkit-border-radius: 150px;-moz-border-radius: 150px;"> '
    flash("You are now logged in as %s" % login_session['username'])
    print "done!"
    return output


def createUser(login_session):
    newUser = User(name=login_session['username'], email=login_session[
                   'email'], picture=login_session['picture'])
    session.add(newUser)
    session.commit()
    user = session.query(User).filter_by(email=login_session['email']).one()
    return user.id


def getUserInfo(user_id):
    user = session.query(User).filter_by(id=user_id).one()
    return user


def getUserID(email):
    try:
        user = session.query(User).filter_by(email=email).one()
        return user.id
    except:
        return None


@app.route('/gdisconnect')
def gdisconnect():
    access_token = login_session.get('access_token')
    print 'In gdisconnect access token is %s', access_token
    print 'User name is: '
    # print login_session['username']
    if access_token is None:
        print 'Access Token is None'
        response = make_response(json.dumps('Current user not connected.'),
                                 401)
        response.headers['Content-Type'] = 'application/json'
        return response
    url = 'https://accounts.google.com/o/oauth2/'
    url += 'revoke?token=%s' % login_session['access_token']
    h = httplib2.Http()
    result = h.request(url, 'GET')[0]
    print 'result is '
    print result
    if result['status'] == '200':
        del login_session['access_token']
        del login_session['gplus_id']
        del login_session['username']
        del login_session['email']
        del login_session['picture']
        response = make_response(json.dumps('Successfully disconnected.'), 200)
        response.headers['Content-Type'] = 'application/json'
        return response
    else:

        response = make_response(json.dumps('Failed to revoke token for '
                                            'given user.', 400))
        response.headers['Content-Type'] = 'application/json'
        return response


# API endpoint for All Categories
@app.route('/categories/JSON')
def showCategoriesJSON():
    # categories = session.query(Categories).all()
    categories = session.query(Categories).order_by(Categories.id.desc())

    return jsonify(categorylist=[i.serialize for i in categories])


# Making an API endpoint (GET request)
@app.route('/categories/<int:category_id>/item/JSON')
def showItemsJSON(category_id):
    category = session.query(Categories).filter_by(id=category_id).first()
    if category is not None:
        items = session.query(CategoryItem).filter_by(
         category_id=category_id).all()
        return jsonify(categoryItems=[i.serialize for i in items])
    else:
        return ''


# show all categories
@app.route('/')
@app.route('/categories/')
def showCategories():
   # categories = session.query(Categories).all()
    categories = session.query(Categories).order_by(Categories.id.desc())
    print categories
    if 'username' not in login_session:
        tme = datetime.datetime.utcnow()
        return render_template('publiccategories.html',
                               categories=categories,
                               tme=tme)
    else:
        return render_template('categories.html', categories=categories)


# create new category
@app.route('/categories/new/', methods=['GET', 'POST'])
@login_required
def newCategory():
    if request.method == 'POST':
        # logic to check number of characters in input data
        name = request.form['name']
        content = request.form['content']
        if (len(content) > 3000) or (len(name) > 300):
            print 'content input is over the character limit'
            return render_template('newCategory.html')
        # ---------------


        newCategory = Categories(name=request.form['name'], content=request.form['content'],
                                  author=login_session['username'], user_id=login_session['user_id'])
        session.add(newCategory)
        session.commit()
        return redirect(url_for('showCategories'))
    else:
        return render_template('newCategory.html')


# edit category
@app.route('/categories/<int:category_id>/edit/', methods=['GET', 'POST'])
@login_required
@category_exists
@user_created_category
def editCategory(category_id):
    editedCategory = session.query(
        Categories).filter_by(id=category_id).first()
    if request.method == 'POST':
        if request.form['name']:
            editedCategory.name = request.form['name']
            return redirect(url_for('showCategories'))
    else:
        return render_template(
            'editCategory.html', category=editedCategory)


# delete category
@app.route('/categories/<int:category_id>/delete/', methods=['GET', 'POST'])
@login_required
@category_exists
@user_created_category
def deleteCategory(category_id):
    categoryToDelete = session.query(
        Categories).filter_by(id=category_id).first()
    if request.method == 'POST':
        session.delete(categoryToDelete)
        session.commit()
        return redirect(url_for('showCategories'))
    else:
        return render_template(
                'deleteCategory.html', category=categoryToDelete)


# Show a category item
@app.route('/categories/<int:category_id>/')
@app.route('/categories/<int:category_id>/items/')
@category_exists
def showItems(category_id):
    category = session.query(Categories).filter_by(id=category_id).first()
    creator = getUserInfo(category.user_id)
    items = session.query(CategoryItem).filter_by(
        category_id=category_id).all()
    if ('username' not in login_session):
        return render_template('publicitem.html',
                               items=items,
                               category=category,
                               creator=creator)
    else:
        return render_template('item.html',
                               items=items,
                               category=category,
                               creator=creator)


# Create a category item
@app.route('/categories/<int:category_id>/item/new/', methods=['GET', 'POST'])
@login_required
def newItem(category_id):
    if request.method == 'POST':
        newCategoryItem = CategoryItem(name=request.form['name'],
                                       description=request.form['description'],
                                       user_id=login_session['user_id'],
                                       category_id=category_id)
        session.add(newCategoryItem)
        session.commit()
        return redirect(url_for('showItems', category_id=category_id))
    else:
        return render_template('newCategoryItem.html', category_id=category_id)


# Edit a category item
@app.route('/categories/<int:category_id>/item/<int:categoryitem_id>/edit/',
           methods=['GET', 'POST'])
@login_required
@item_exists
@user_created_item
def editItem(category_id, categoryitem_id):
    editedCategoryItem = session.query(
            CategoryItem).filter_by(
            id=categoryitem_id).filter_by(category_id=category_id).first()
    if request.method == 'POST':
        if request.form['name']:
            editedCategoryItem.name = request.form['name']
        if request.form['description']:
            editedCategoryItem.description = request.form['description']
            return redirect(url_for('showItems', category_id=category_id))
    else:
        return render_template(
                'editCategoryItem.html',
                category_id=category_id,
                item=editedCategoryItem
                )


# Delete a category item
@app.route('/categories/<int:category_id>/item/<int:categoryitem_id>/delete/',
           methods=['GET', 'POST'])
@login_required
@item_exists
@user_created_item
def deleteItem(category_id, categoryitem_id):
    categoryitemToDelete = session.query(
        CategoryItem).filter_by(
        id=categoryitem_id).filter_by(category_id=category_id).first()
    if request.method == 'POST':
        session.delete(categoryitemToDelete)
        session.commit()
        return redirect(
            url_for('showItems', category_id=category_id))
    else:
        return render_template(
                    'deleteItem.html',
                    category_id=category_id,
                    categoryitem=categoryitemToDelete
                    )


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.secret_key = 'super_secret_key1'
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
