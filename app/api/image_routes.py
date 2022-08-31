from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.models import db, Album, Image, Comment, User, Favorite

image_routes = Blueprint("image_routes", __name__)

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
    userId = request.json['userId']
    albumId = request.json['albumId']
    tagId = request.json['tagId']
    content = request.json['content']
    description = request.json['description']
    imageUrl = request.json['imageUrl']

    newImage = Image(
        userId = userId,
        albumId = albumId,
        tagId = tagId,
        content = content,
        description = description,
        imageUrl = imageUrl
    )
    print('!!!!!!!!!!!!!!!!!!!!!!!!!!')
    print(newImage.to_dict())

    db.session.add(newImage)
    db.session.commit()
    return newImage.to_dict()


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
    image = Image.query.get(id)
    if image:
        imageComments = image.to_dict_1()
        # commentList = imageComments['comments']
    return {"imageComments": imageComments['comments']}

    # return {"imageComments": imageComments['comments'], 'eachComment': [comment.user.to_dict() for comment in commentList]}
    # return jsonify({"No comments"})




# # GET A SINGLE COMMENT
# # /localhost:3000/api/images/:imageId/comments/:commentId
# @image_routes.route('/<int:imageId>/comments/<int:commentId>')
# @login_required
# def get_single_comment(imageId, commentId):
#     comment = Comment.query.get(commentId)
#     return comment.to_dict()


# CREATE A COMMENT OF AN IMAGE
# POST /localhost:3000/api/images/:imageId/comments/create
@image_routes.route('/<int:imageId>/comments/create', methods=["POST"])
@login_required
def create_comment(imageId):
    # image = Image.query.get(imageId)
    newComment = Comment(
        userId = request.json['userId'],
        imageId = request.json['imageId'],
        comment = request.json['comment'],
    )
    db.session.add(newComment)
    db.session.commit()
    return newComment.to_dict()



# UPDATE A COMMENT
# PUT /localhost:3000/api/images/:imageId/comments/:commentId/edit
@image_routes.route('/<int:imageId>/comments/<int:commentId>/edit', methods=['PUT'])
@login_required
def update_comment(imageId, commentId):
    targetComment = Comment.query.get(commentId)
    data = request.json
    print('data--------------------')
    targetComment.comment = data['comment']
    db.session.commit()
    return targetComment.to_dict()
    # comment1 = Comment.query.get(commentId)
    # commentInfo = request.json['comment']
    # comment1.comment = commentInfo
    # # db.session.add(comment)
    # db.session.commit()
    # return comment1.to_dict()





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
