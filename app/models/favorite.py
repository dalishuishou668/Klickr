from .db import db


class Favorite(db.Model):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    imageId = db.Column(db.Integer, db.ForeignKey("images.id"), nullable=False)


    # Relationships
    user = db.relationship("User", back_populates="favorites")
    images = db.relationship("Image", back_populates="favorites")


    def to_dict(self):
        return{
            "id": self.id,
            "userId": self.userId,
            "imageId": self.imageId
        }
