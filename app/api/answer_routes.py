from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user

from app.models import db, Answer, Comment
from app.forms import AnswerForm, CommentForm
from app.api.auth_routes import validation_errors_to_error_messages

bp_answer_routes = Blueprint('answers', __name__)


# POST a comment on an answer
@bp_answer_routes.route('/<int:answerId>/comments', methods=['POST'])
@login_required
def post_comment(answerId):
    """
    Comment on an answer based on answerId
    """
    # Check if answer exists:
    answer = Answer.query.get(answerId)
    if answer is None:
        return {"errors": "Not Found"}, 404

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # Make new comment on comment form:
    if form.validate_on_submit():
        comment = Comment(
            userId=current_user.id,
            answerId=answerId,
            body=form.data['body']
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Delete an Answer
@bp_answer_routes.route('/<int:answerId>', methods=['DELETE'])
@login_required
def delete_answer(answerId):
    """
    Delete an answer based on answerId
    """
    answer = Answer.query.get(answerId)
    # Check if answer exists:
    if answer is None:
        return {"errors": ["Not Found"]}, 404

    # Check if answer belongs to current user:
    if answer.userId != current_user.id:
        return {"errors": ["Unauthorized"]}, 401

    db.session.delete(answer)
    db.session.commit()

    return {"Message": "Successfully Deleted"}


# Edit an Answer
@bp_answer_routes.route('/<int:answerId>', methods=['PUT'])
@login_required
def edit_answer(answerId):
    """
    Edit an answer based on answerId
    """
    answer = Answer.query.get(answerId)
    # Check if answer exists:
    if answer is None:
        return {"errors": ["Not Found"]}, 404

    # Check if answer belongs to current user:
    if answer.userId != current_user.id:
        return {"errors": ["Unauthorized"]}, 401

    form = AnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # Edit answer on answer form
    if form.validate_on_submit():
        answer.body = form.data['body']
        db.session.commit()
        return answer.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
