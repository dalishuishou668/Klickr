from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():
#    sea nature city pet food

    comment1 = Comment(userId = 3, imageId=1, comment="WOW this picture is beautiful")
    comment2 = Comment(userId = 3, imageId=2, comment="Amazing view")
    comment3 = Comment(userId = 3, imageId=3, comment="Cool")
    comment4 = Comment(userId = 2, imageId=4, comment="Fantastic image!")
    comment5 = Comment(userId = 2, imageId=5, comment="Wonderful capture and scenery, beautiful colours!")
    comment6 = Comment(userId = 2, imageId=6, comment="Beautiful")
    comment7 = Comment(userId = 1, imageId=7, comment="Really nice")
    comment8 = Comment(userId = 1, imageId=8, comment="Lovely capture & processing style.")
    comment9 = Comment(userId = 1, imageId=9, comment="looks a super place to visit.")
    comment10 = Comment(userId = 3, imageId=10, comment="Great image!")
    comment11 = Comment(userId = 3, imageId=11, comment="Stunning image!")
    comment12 = Comment(userId = 3, imageId=12, comment="I love this place")
    comment13 = Comment(userId = 1, imageId=13, comment="Brilliant capture!")
    comment14 = Comment(userId = 1, imageId=14, comment="Appetizing shot ! :-)")
    comment15 = Comment(userId = 2, imageId=15, comment="WOW this picture is beautiful")
    comment16 = Comment(userId = 1, imageId=15, comment="test multiple comments")




    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incremmenting primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE(comments RESTART IDENTITY CASCADE;')
    db.session.commit()
