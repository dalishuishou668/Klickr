from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    imageId = db.Column(db.Integer, db.ForeignKey("images.id"), nullable=False)
    comment = db.Column(db.Text, nullable = False)


    # Relationships
    user = db.relationship("User", back_populates="comments")
    images = db.relationship("Image", back_populates="comments")


    def to_dict(self):
        return{
            "id": self.id,
            "userId": self.userId,
            "imageId": self.imageId,
            "comment": self.comment,
        }
