from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.forms import CreateImageForm, UpdateImageForm, CreateCommentForm, UpdateCommentForm
from app.models import db, Album, Image, Comment, User, Favorite

image_routes = Blueprint("image_routes", __name__)

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




# Get all database images --- /localhost:3000/api/images
@image_routes.route('/')
def get_all_images():
    images = Image.query.all()
    # return {"allImages": [image.to_dict() for image in images], 'eachImage': [image.user.to_dict() for image in images]}
    return {"allImages": [image.to_dict() for image in images]}


# Get all user images --- /localhost:3000/api/images/userId
@image_routes.route('/<int:userId>/all-images')
def get_user_images(userId):
    images = Image.query.filter(Image.userId == userId).all()
    return {"userImages": [image.to_dict() for image in images]}


# Get a single image --- /localhost:3000/api/images/:imageId
@image_routes.route('/<int:id>')
@login_required
def get_single_image(id):
    singleImage = Image.query.get(id)
    print('single images in backend********************')
    print(singleImage.to_dict_1())
    return singleImage.to_dict_1()


# # Create an image --- /localhost:3000/api/images/upload
@image_routes.route('/upload', methods=['POST'])
@login_required
def create_image():
    form = CreateImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newImage = Image(
            userId=form.data['userId'],
            albumId=form.data['albumId'],
            content=form.data['content'],
            description=form.data['description'],
            imageUrl=form.data['imageUrl'],
        )
        db.session.add(newImage)
        db.session.commit()
        return newImage.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    # userId = request.json['userId']
    # albumId = request.json['albumId']
    # # tagId = request.json['tagId']
    # content = request.json['content']
    # description = request.json['description']
    # imageUrl = request.json['imageUrl']

    # newImage = Image(
    #     userId = userId,
    #     albumId = albumId,
    #     # tagId = tagId,
    #     content = content,
    #     description = description,
    #     imageUrl = imageUrl
    # )
    # print('!!!!!!!!!!!!!!!!!!!!!!!!!!')
    # print(newImage.to_dict())

    # db.session.add(newImage)
    # db.session.commit()
    # return newImage.to_dict()


# Update an image --- /localhost:3000/api/images/:imageId/edit
@image_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_image(id):
    targetImage = Image.query.get(id)
    data = request.json
    print('data')
    targetImage.content = data['content']
    targetImage.description = data['description']
    db.session.commit()
    return targetImage.to_dict()


    # ------------- Not working ---------------------
    # form = UpdateImageForm()
    # form['csrf_token'].data = request.cookies['csrf_token']

    # if form.validate_on_submit():
    #     targetImage = Image.query.get(id)
    #     targetImage.userId=form.data['userId'],
    #     targetImage.albumId=form.data['albumId'],
    #     targetImage.content=form.data['content'],
    #     targetImage.description=form.data['description'],
    #     targetImage.imageUrl=form.data['imageUrl'],


    #     db.session.commit()
    #     print(form.data)
    #     return targetImage.to_dict()
    # return {'errors': "ERROR!!!!!!!"}, 401


# Delete an image --- /localhost:3000/api/images/:imageId/delete
@image_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_image(id):
    image = Image.query.get(id)
    db.session.delete(image)
    db.session.commit()
    return image.to_dict()


# #  ---------------- Routes for comments ------------------
# GET all comments of a single image
# /localhost:3000/api/images/:imageId/comments
@image_routes.route('/<int:id>/comments')
@login_required
def get_image_comments(id):

    comments = Comment.query.filter(Comment.imageId == id).all()
    return {"imageComments": [comment.to_dict() for comment in comments]}
    # image = Image.query.get(id)
    # if comments:
    #     imageComments = image.to_dict_1()
        # commentList = imageComments['comments']

    # return {"imageComments":[comment.to_dict() for comment in comments], 'eachComment': [comment.user.to_dict() for comment in comments]}
    # return {"imageComments": imageComments['comments']}
    # return jsonify({"No comments"})



# CREATE A COMMENT OF AN IMAGE
# POST /localhost:3000/api/images/:imageId/comments/create
@image_routes.route('/<int:imageId>/comments/create', methods=["POST"])
@login_required
def create_comment(imageId):

    # newComment = Comment(
    #     userId = request.json['userId'],
    #     imageId = request.json['imageId'],
    #     comment = request.json['comment'],
    # )
    # db.session.add(newComment)
    # db.session.commit()
    # return newComment.to_dict()

    form = CreateCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newComment = Comment(
            userId=form.data['userId'],
            imageId=form.data['imageId'],
            comment=form.data['comment'],
        )
        db.session.add(newComment)
        db.session.commit()
        return newComment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



# UPDATE A COMMENT
# PUT /localhost:3000/api/images/:imageId/comments/:commentId/edit
@image_routes.route('/<int:imageId>/comments/<int:commentId>/edit', methods=['PUT'])
@login_required
def update_comment(imageId, commentId):
    # targetComment = Comment.query.get(commentId)
    # data = request.json
    # print('data------------->>>>>>>>>')
    # targetComment.comment = data['comment']
    # db.session.commit()
    # return targetComment.to_dict()

    #  --------------------------------------------
    form = UpdateCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        targetComment = Comment.query.get(commentId)
        targetComment.userId=form.data['userId'],
        targetComment.imageId=form.data['imageId'],
        targetComment.comment=form.data['comment']
        db.session.commit()
        print(form.data)
        return targetComment.to_dict()
    return {'errors': "ERROR!!!!!!!"}, 401




# DELETE A COMMENT (only user who create can delete comment)
# DELETE /localhost:3000/api/images/:imageId/comments/:commentId/delete
@image_routes.route('/<int:imageId>/comments/<int:commentId>/delete', methods=['DELETE'])
@login_required
def delete_comment(imageId, commentId):
    targetComment = Comment.query.get(commentId)
    db.session.delete(targetComment)
    db.session.commit()
    return targetComment.to_dict()
    # return {"message": "Sucessfully Deleted."}
    # targetComment.delete()
    # return jsonify({"Already deleted"})



#  ---------------- Routes for favorites ------------------
# GET ALL FAVORITES OF A SINGLE IMAGE
# /localhost:3000/api/images/:imageId/faves
@image_routes.route('/<int:id>/faves')
@login_required
def get_image_faves(id):
    print('==================get_image_faves===================')
    faves = Favorite.query.filter(Favorite.imageId == id).all()
    return {"imageFaves": [fave.to_dict() for fave in faves]}
    # image = Image.query.get(id)
    # if image:
    #     imageFaves = image.to_dict_1()
    # return {"imageFaves": imageComments['favorites']}


# GET ALL FAVORITES OF A SINGLE USER
# /localhost:3000/api/images/:imageId/faves
@image_routes.route('/userfaves/<int:userId>')
@login_required
def get_user_faves(userId):
    print('0000000000000000000000000000000000000')
    userfaves = Favorite.query.filter(Favorite.userId == userId).all()
    print('userfaves')
    print(userfaves)
    return {"userFaves": [fave.to_dict() for fave in userfaves], "eachUserFaveImage": [fave.images.to_dict() for fave in userfaves]}


# Create user favorite
# POST /localhost:3000/api/images/:imageId/favorites/create
@image_routes.route('/<int:id>/favorites/create', methods=["POST"])
@login_required
def create_fave(id):
    image = Image.query.get(id)
    newFave = Favorite(
        imageId = request.json['imageId'],
        userId = request.json['userId']
    )
    print('===============>>>>>>>>>>>>')
    print(newFave)
    print([newFave.to_dict()])
    db.session.add(newFave)
    db.session.commit()
    return {"newFave": [newFave.to_dict()]}
    # return newFave.to_dict()



# Delete favorite
# DELETE /localhost:3000/api/images/:imageId/favorites/:favoritesId/delete
@image_routes.route('/<int:imageId>/favorites/<int:favoriteId>/delete', methods=["DELETE"])
@login_required
def delete_fave(imageId, favoriteId):
    targetFave = Favorite.query.get(favoriteId)
    db.session.delete(targetFave)
    db.session.commit()
    return targetFave.to_dict()
