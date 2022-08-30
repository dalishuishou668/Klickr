from .db import db


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.Text, nullable = False)


    # Relationships
    user = db.relationship("User", back_populates="albums")
    images = db.relationship("Image", back_populates="albums", cascade="all, delete")


    def to_dict(self):
        return{
            "id": self.id,
            "userId": self.userId,
            "title": self.title,
            "images": [image.to_dict() for image in self.images]
        }
