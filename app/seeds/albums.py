from app.models import db, Album


# Adds a demo user, you can add other users here if you want
def seed_albums():
#    sea nature city pet food flower

    album1 = Album(userId = 1, title="Test1")
    album2 = Album(userId = 2, title="Test2")
    album3 = Album(userId = 3, title="Test3")

    db.session.add(album1)
    db.session.add(album2)
    db.session.add(album3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_albums():
    db.session.execute('TRUNCATE(albums RESTART IDENTITY CASCADE;')
    db.session.commit()
