from .db import db


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.Text, nullable = False)


    # Relationships
    user = db.relationship("User", back_populates="tags")
    images = db.relationship("Image", back_populates="tag")


    def to_dict(self):
        return{
            "id": self.id,
            "userId": self.userId,
            "name": self.name,
            "images": [image.to_dict() for image in self.images]
        }
