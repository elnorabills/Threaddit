from app.models import db, User
import os


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Dazzling-Dolphin', email='demo@aa.io', password='password')
    marnie = User(
        username='Majestic-Moose', email='marnie@aa.io', password='password')
    bobbie = User(
        username='Blissful-Badger', email='bobbie@aa.io', password='password')
    liam = User(
        username='Lavish-Lizard', email='liam@aa.io', password='password')
    ellen = User(
        username='Elegant-Emu', email='ellen@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(liam)
    db.session.add(ellen)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    if os.environ.get("FLASK_ENV") == 'development':
        db.session.execute('DELETE FROM users;')
    else:
        db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
