from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import db, Album, Image, Comment, User, Favorite
from app.forms import CreateAlbumForm, UpdateAlbumForm

album_routes = Blueprint("album_routes", __name__)

# ------------- validations ---------------------
def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
            print('err msg backend ------->>>>>>>>>>>>')
            print(errorMessages)
    return errorMessages




# Get all user albums
# /localhost:3000/api/albums/:userId
@album_routes.route('/<int:userId>')
@login_required
def get_single_album(userId):
    albums = Album.query.filter(Album.userId == userId).all()
    print('albums in backend********************')
    print(albums)
    return {"userAlbums": [album.to_dict() for album in albums]}


# # Create an album
# # /localhost:3000/api/albums/create
@album_routes.route('/create', methods=['POST'])
@login_required
def create_album():
    # userId = request.json['userId']
    # title = request.json['title']

    # newAlbum = Album(
    #     userId = userId,
    #     title = title
    # )

    # db.session.add(newAlbum)
    # db.session.commit()
    # return newAlbum.to_dict()


    form = CreateAlbumForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newAlbum = Album(
            userId=form.data['userId'],
            title=form.data['title'],
        )
        db.session.add(newAlbum)
        db.session.commit()
        return newAlbum.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#  Get all images of a single album
# /localhost:3000/api/albums/:albumId/images
@album_routes.route('/<int:albumId>/images')
@login_required
def get_album_images(albumId):
    album = Album.query.get(albumId)
    albumImages = album.to_dict()
    # if albumImages["images"]:
    return {"images": albumImages["images"]}
    # else:
    #     return jsonify({"No images in the album"})



#  Update an album
#  /localhost:3000/api/albums/:albumId/edit
@album_routes.route('/<int:albumId>/edit', methods=['PUT'])
@login_required
def edit_album(albumId):
    targetAlbum = Album.query.get(albumId)
    data = request.json
    print('data')
    targetAlbum.title = data['title']
    db.session.commit()
    return targetAlbum.to_dict()


    # ------------- Not working ---------------------
    # form = UpdateAlbumForm()
    # form['csrf_token'].data = request.cookies['csrf_token']

    # if form.validate_on_submit():
    #     targetAlbum = Album.query.get(albumId)
    #     targetAlbum.userId=form.data['userId'],
    #     targetAlbum.albumId=form.data['title'],

    #     db.session.commit()
    #     print(form.data)
    #     return targetAlbum.to_dict()
    # return {'errors': "ERROR!!!!!!!"}, 401





# #  Delete an album
# #  /localhost:3000/api/albums/:albumId/delete
@album_routes.route('/<int:albumId>/delete', methods=['DELETE'])
@login_required
def delete_album(albumId):
    album = Album.query.get(albumId)
    db.session.delete(album)
    db.session.commit()
    return album.to_dict()
