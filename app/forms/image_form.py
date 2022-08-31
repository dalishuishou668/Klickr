from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class CreateImageForm(FlaskForm):
        userId = IntegerField('User', validators=[DataRequired()])
        albumId = IntegerField('Album', validators=[DataRequired()])
        tagId = IntegerField('Tag')
        content = StringField('Content', validators=[DataRequired()])
        description = StringField('Description', validators=[DataRequired()])
        imageUrl = StringField('imageUrl', validators=[DataRequired()])



class UpdateImageForm(FlaskForm):
        id = IntegerField('id')
        userId = IntegerField('User', validators=[DataRequired()])
        albumId = IntegerField('Album', validators=[DataRequired()])
        tagId = IntegerField('Tag')
        content = StringField('Content', validators=[DataRequired()])
        description = StringField('Description', validators=[DataRequired()])
        imageUrl = StringField('imageUrl', validators=[DataRequired()])
