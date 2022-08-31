from app.models import db, Image


# Adds a demo user, you can add other users here if you want
def seed_images():
    image1 = Image(userId = 1, albumId = 1, content="cloud above ocean", description="untouched by the earth's impurity the sky is vast and empty more than the oceanwhich is full of many mysteries",
                   imageUrl="https://images.unsplash.com/photo-1497290756760-23ac55edf36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")
    image2 = Image(userId = 1, albumId = 1, content="Sunrise above a sandy beach", description="I am at total peace sitting upon the cool sparkling snow white sandy beach feeling the chill of the still early morning air begin to warm waves lapping slapping upon the shore the sea crashing on the shore forever more as though the sea was welcoming me to this day",
                    imageUrl="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80")
    image3 = Image(userId = 1, albumId = 1, content="Wonderful islands", description="Crystal clear water of the sea",
                    imageUrl="https://images.unsplash.com/photo-1550951298-5c7b95a66bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80")
    image4 = Image(userId = 1, albumId = 1, content="Mountains over the sea", description="Mountains give me peace and the ocean makes people restless",
                    imageUrl="https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")
    image5 = Image(userId = 1, albumId = 1, content="Hopeful Horizons", description="Keep your eyes on the horizon. Where the sun melts into the sea. Someday, we will get there.",
                    imageUrl="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
    image6 = Image(userId = 1, albumId = 1, content="Never Lost", description="See the beauty, today is new",
                    imageUrl="https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80")
    image7 = Image(userId = 2, albumId = 2, content="Travel in Germany", description="Try to travel, otherwise you end up believing",
                    imageUrl="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
    image8 = Image(userId = 2, albumId = 2, content="Paris", description="Favorite city forever",
                    imageUrl="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80")
    image9 = Image(userId = 2, albumId = 2, content="Sunset in Burano", description="A glorious sunset over the Venetian lagoon. Taken from the harbour of Burano.",
                    imageUrl="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")
    image10 = Image(userId = 2, albumId = 2, content="Winding through London", description="Live. Love. London",
                    imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")
    image11 = Image(userId = 2, albumId = 2, content="Old canals of Suzhou", description="All you need is love and a vacation in Suzhou.",
                    imageUrl="https://images.unsplash.com/photo-1609148499456-bdc229a1ead0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1285&q=80")
    image12 = Image(userId = 2, albumId = 2, content="Shanghai", description="By seeing Shanghai, I have seen as much of life as the world can show.",
                    imageUrl="https://images.unsplash.com/photo-1548919973-5cef591cdbc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")
    image13 = Image(userId = 3, albumId = 3, content="Cutie", description="A simple moment as each week-end when I am home with my wife and my little cat.",
                    imageUrl="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80")
    image14 = Image(userId = 3, albumId = 3, content="Dessert", description="Delicious cake with pistachio and raspberries",
                    imageUrl="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80")
    image15 = Image(userId = 3, albumId = 3, content="A wonderful night in Provence", description="To walk alone in Provence is the greatest rest",
                    imageUrl="https://images.unsplash.com/photo-1600759487717-62bbb608106e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE(images RESTART IDENTITY CASCADE;')
    db.session.commit()
