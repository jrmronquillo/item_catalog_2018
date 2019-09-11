import os
import sys
import datetime
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)
    picture = Column(String(250))


def _get_date():
    return datetime.date.today()

class Categories(Base):
    __tablename__ = 'categories'

    id = Column(Integer, primary_key=True)
    created = Column(Date, default=_get_date)
    author = Column(String(250), nullable=False)
    name = Column(String(300), nullable=False)
    content = Column(String(3000), nullable=False)
    demo_url = Column(String(250), nullable=False)
    categoryItems = relationship("CategoryItem",
                                 cascade='save-update, merge, delete')
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship(User)

    @property
    def serialize(self):
        """Return object in serializeable format"""
        return {
            'demo_url': self.demo_url,
            'content': self.content,
            'name': self.name,
            'created': self.created,
            'id': self.id,
            }


class CategoryItem(Base):
    __tablename__ = 'categoryitem'

    name = Column(String(80), nullable=False)
    id = Column(Integer, primary_key=True)
    description = Column(String(2000))
    category_id = Column(Integer, ForeignKey('categories.id'))
    # categories = relationship(Categories)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship(User)

    @property
    def serialize(self):
        """Return object data in easily seralizeable format"""
        return {
            'name': self.name,
            'id': self.id,
            'description': self.description,
        }

class PortfolioItem(Base):
    __tablename__ = 'portfolioitem'

    title = Column(String(80), nullable=False)
    id = Column(Integer, primary_key=True)
    description = Column(String(2000))
    url = Column(String(500))
    hashtags = Column(String(500))

    @property
    def serialize(self):
        return {
            'title': self.title,
            'description': self.description,
            'url':self.url,
            'hashtags': self.hashtags,
        } 

engine = create_engine('sqlite:///catalogwithusers.db', connect_args={'check_same_thread':False})
# engine = create_engine(
#   'postgresql+psycopg2://catalog:catalog@localhost/catalog')
Base.metadata.create_all(engine)
