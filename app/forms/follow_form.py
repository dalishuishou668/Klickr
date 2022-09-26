from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class CreateFollowForm(FlaskForm):
    userId = IntegerField("UserId", validators=[DataRequired()])
    followerId = IntegerField("FollowerId", validators=[DataRequired()])
