from app.models import db, Tag


# Adds a demo user, you can add other users here if you want
def seed_tags():
#    sea nature city pet food

    tag1 = Tag(userId = 1, name="sea")
    tag2 = Tag(userId = 1, name="nature")
    tag3 = Tag(userId = 2, name="city")
    tag4 = Tag(userId = 3, name="pet")
    tag5 = Tag(userId = 3, name="food")
    tag6 = Tag(userId = 3, name="flower")


    db.session.add(tag1)
    db.session.add(tag2)
    db.session.add(tag3)
    db.session.add(tag4)
    db.session.add(tag5)
    db.session.add(tag6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_tags():
    db.session.execute('TRUNCATE(tags) RESTART IDENTITY CASCADE;')
    db.session.commit()
