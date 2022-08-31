from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class CreateCommentForm(FlaskForm):
    userId = IntegerField('User', validators=[DataRequired()])
    imageId = IntegerField('Image', validators=[DataRequired()])
    comment = StringField('Comment', validators=[DataRequired()])



class UpdateCommentForm(FlaskForm):
    id = IntegerField('id')
    userId = IntegerField('User', validators=[DataRequired()])
    imageId = IntegerField('Image', validators=[DataRequired()])
    comment = StringField('Comment', validators=[DataRequired()])
