from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired, Length


class CommentForm(FlaskForm):
    body = TextAreaField('body', validators=[DataRequired(), Length(max=2000, message=None)])
