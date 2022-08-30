from app.models import db, Favorite


# Adds a demo user, you can add other users here if you want
def seed_favorites():
#    sea nature city pet food

    favorite1 = Favorite(userId = 2, imageId=1)
    favorite2 = Favorite(userId = 2, imageId=3)
    favorite3 = Favorite(userId = 3, imageId=5)
    favorite4 = Favorite(userId = 1, imageId=7)
    favorite5 = Favorite(userId = 1, imageId=9)
    favorite6 = Favorite(userId = 3, imageId=10)
    favorite7 = Favorite(userId = 1, imageId=8)
    favorite8 = Favorite(userId = 3, imageId=9)




    db.session.add(favorite1)
    db.session.add(favorite2)
    db.session.add(favorite3)
    db.session.add(favorite4)
    db.session.add(favorite5)
    db.session.add(favorite6)
    db.session.add(favorite7)
    db.session.add(favorite8)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incremmenting primary key, CASCADE deletes any
# dependent entities
def undo_favorites():
    db.session.execute('TRUNCATE(favorites RESTART IDENTITY CASCADE;')
    db.session.commit()
