from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Length
from app.models import User, Question


class QuestionForm(FlaskForm):
    title = TextAreaField('title', validators=[DataRequired(), Length(max=200, message=None)])
    body = TextAreaField('body', validators=[DataRequired(), Length(max=2000, message=None)])
    postCategory = StringField('postCategory')
