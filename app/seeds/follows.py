from app.models import db, Follow


# Adds a demo user, you can add other users here if you want
def seed_follows():
#    sea nature city pet food

    # user 1 follow user 2, user 3 follow user 1
    follow1 = Follow(userId = 1, followingId=2)
    follow2 = Follow(userId = 3, followingId=1)

    db.session.add(follow1)
    db.session.add(follow2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incremmenting primary key, CASCADE deletes any
# dependent entities
def undo_follows():
    db.session.execute('TRUNCATE(follows RESTART IDENTITY CASCADE;')
    db.session.commit()
