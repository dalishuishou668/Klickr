from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class CreateAlbumForm(FlaskForm):
    userId = IntegerField('User', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])



class UpdateAlbumForm(FlaskForm):
    id = IntegerField('id')
    userId = IntegerField('User', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
