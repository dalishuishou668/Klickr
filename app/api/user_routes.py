from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import db, Album, Image, Comment, User, Favorite

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()



# #  ---------------- Routes for follows ------------------

# # READ ALL PEOPLE PROFILE THAT THE LOGGEDIN USER FOLLOWS
# # /localhost:3000/api/users/:userId/follows
# @user_routes.route('/<int:userId>/yourfollows')
# @login_required
# def getFollows(userId):
#     userFollowsList = Follow.query.filter(Follow.userId == userId).all()
#     # friendsList = Friend.query.filter(Friend.userId == id).all()
#     # print('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',friendsList[0].user)
#     # return {'friends': [friend.to_dict() for friend in friendsList], 'eachFriend': [friend.user.to_dict() for friend in friendsList]}
#     return {'follows': [follow.to_dict() for follow in userFollowsList], 'eachFollow': [follow.user.to_dict() for follow in userFollowsList]}

#     # print(userFollows.to_dict())
#     # return {"allUserFollows": userFollows.to_dict()}
#     # return {"allUserFollows": [follow.to_dict() for follow in userFollows]}



# # GET ALL USER NOT FOLLOW
# # READ ALL PEOPLE PROFILE THAT THE LOGGEDIN USER FOLLOWS
# # /localhost:3000/api/users/:userId/follows
# @user_routes.route('/<int:userId>/notfollows')
# @login_required
# def getNotFollows(userId):
#     print('################################')
#     notFollowsList = Follow.query.filter(Follow.userId != userId).all()
#     # friendsList = Friend.query.filter(Friend.userId == id).all()

#     # result = []
#     # for follow in range(len(notFollowsList)):
#     # for follow in notFollowsList:
#     #     follow1 = follow.to_dict()
#     #     result.append(follow1)

#     # for singleresult in result:
#     #     if singleresult.userId != userId:
#     #         targetUser = User.query.get(singleresult.userId)
#     #         return targetUser.to_dict()
#     #     else:
#     #         return something


#     print(notFollowsList)
#     print([follow.to_dict() for follow in notFollowsList])
#     print('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',notFollowsList[0].user)
#     # return {'friends': [friend.to_dict() for friend in friendsList], 'eachFriend': [friend.user.to_dict() for friend in friendsList]}
#     return {'notfollows': [follow.to_dict() for follow in notFollowsList], 'eachnotFollow': [follow.user.to_dict() for follow in notFollowsList]}

#     # print(userFollows.to_dict())
#     # return {"allUserFollows": userFollows.to_dict()}
#     # return {"allUserFollows": [follow.to_dict() for follow in userFollows]}




# # READ A SINGLE PERSON IMAGE PROFILE THAT THE LOGGEDIN USER FOLLOWS
# # /localhost:3000/api/users/:userId/follows/:followId
# # @user_routes.route('/<int:userId>/follows/<int:followId>')
# # @login_required
# # def getSingleFollow(userId, followId):
# #


# # ADD A FOLLOW
# # /localhost:3000/api/users/:userId/follows/create
# # @user_routes.route('/<int:userId>/follows/create', methods=['POST'])
# # @login_required



# # UNFOLLOW A PERSON
# # /localhost:3000/api/users/:userId/follows/:followId /delete
# # @user_routes.route('/<int:userId>/follows/<int:followId>', methods=['DELETE'])
# # @login_required
