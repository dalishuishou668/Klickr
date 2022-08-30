from .db import db


class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    followingId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    # followerId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    # followieId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)


    # Relationships
    user = db.relationship("User", back_populates="follows")
    # # user = db.relationship("User", back_populates="user_following")
    # # followie = db.relationship("User", back_populates="user_followers")

    # user = db.relationship("User", foreign_keys=[followerId], back_populates="user_followings")
    # followie = db.relationship("User", foreign_keys=[followieId], back_populates="user_followers")

    def to_dict(self):
        return{
            "id": self.id,
            "userId": self.userId,
            "followingId": self.followingId,
        }

        # return{
        #     "id": self.id,
        #     "follower_id": self.followerId,
        #     "following_id": self.followieId,
        # }
