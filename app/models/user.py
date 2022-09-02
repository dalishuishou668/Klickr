from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    # profile_pic = db.Column(db.Text, default="https://cdn-icons-png.flaticon.com/512/4675/4675250.png")


    # Relationships
    images = db.relationship("Image", back_populates="user")
    albums = db.relationship("Album", back_populates="user")
    comments = db.relationship("Comment", back_populates="user")
    favorites = db.relationship("Favorite", back_populates="user")
    # tags = db.relationship("Tag", back_populates="user")

    # follows = db.relationship("Follow", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
            # 'profile_pic': self.profile_pic
        }

    def to_dict_1(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            "images": [image.id for image in self.iamges],
            "albums": [album.id for album in self.albums],
            "comments": [comment.id for comment in self.comments],
            "favorites": [favorite.id for favorite in self.favorites],
            "tags": [tag.id for tag in self.tags],
            "follows": [follow.id for follow in self.follows]
            # "follower": [followie.id for followie in self.user_followings],
            # "following": [follower.id for follower in self.user_followers]

        }
