# from flask import Blueprint, jsonify
# from flask_login import login_required
# from app.models import db, Album, Image, Comment, User, Favorite

# tag_routes = Blueprint("tag_routes", __name__)


# # GET ALL TAGS
# @tag_routes.route('/')
# @login_required
# def get_tags():
#     tags = Tag.query.all()
#     return {"alltags": [tag.to_dict() for tag in tags]}



# # Get all images of a tag
# # GET /localhost:3000/api/tags/:tagId/images
# # @tag_routes.route('/<int:tagId>/images')
# # @login_required



# # Create a tag
# # POST /localhost:3000/api/tags/create - CREATE A TAG
# # @tag_routes.route('/create', methods=['POST'])
# # @login_required
