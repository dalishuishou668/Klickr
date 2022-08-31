from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    albumId = db.Column(db.Integer, db.ForeignKey("albums.id"), nullable=False)
    # tagId = db.Column(db.Integer, db.ForeignKey("tags.id"), nullable=True)
    content = db.Column(db.Text, nullable = False)
    description = db.Column(db.Text, nullable = False)
    imageUrl = db.Column(db.String, nullable = False)


    # Relationships
    user = db.relationship("User", back_populates="images")
    albums = db.relationship("Album", back_populates="images")
    comments = db.relationship("Comment", back_populates="images", cascade="all, delete")
    favorites = db.relationship("Favorite", back_populates="images", cascade="all, delete")
    # tag = db.relationship("Tag", back_populates="images")

    def to_dict(self):
        return{
            "id": self.id,
            "userId": self.userId,
            "albumId": self.albumId,
            "content": self.content,
            "description": self.description,
            "imageUrl": self.imageUrl,
            # "tagId": self.tagId,
        }

    def to_dict_1(self):
        return{
            "id": self.id,
            "userId": self.userId,
            "albumId": self.albumId,
            "content": self.content,
            "description": self.description,
            "imageUrl": self.imageUrl,
            "comments": [comment.to_dict() for comment in self.comments]
            # "tagId": self.tagId,
            # "favorites": [favorite.to_dict() for favorite in self.favorites]
            # "album": self.album,
            # "tag": self.tag,

        }
