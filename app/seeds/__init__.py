from flask.cli import AppGroup
from .users import seed_users, undo_users
from .images import seed_images, undo_images
from .albums import seed_albums, undo_albums
from .comments import seed_comments, undo_comments
from .favorites import seed_favorites, undo_favorites
from .follows import seed_follows, undo_follows
from .tags import seed_tags, undo_tags

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_albums()
    seed_tags()
    seed_images()
    seed_comments()
    seed_favorites()
    seed_follows()


    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_albums()
    undo_tags()
    undo_images()
    undo_comments()
    undo_favorites()
    undo_follows()

    # Add other undo functions here

