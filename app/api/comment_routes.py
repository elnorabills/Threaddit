from flask import Blueprint, request
from flask_login import login_required, current_user

from app.models import db, Comment
from app.forms import CommentForm
from app.api.auth_routes import validation_errors_to_error_messages

bp_comment_routes = Blueprint('comments', __name__)


# UPDATE a comment
@bp_comment_routes.route('/<int:commentId>', methods=['PUT'])
@login_required
def edit_comment(commentId):
    """
    Edit a comment based on commentId
    """
    comment = Comment.query.get(commentId)
    # Check if comment exists:
    if comment is None:
        return {"errors": ["Not Found"]}, 404

    # Check if comment belongs to current user:
    if comment.userId != current_user.id:
        return {"errors": ["Unauthorized"]}, 401

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # Edit comment on comment form
    if form.validate_on_submit():
        comment.body = form.data['body']
        db.session.commit()
        return comment.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

# DELETE comment
@bp_comment_routes.route('/<int:commentId>', methods=['DELETE'])
@login_required
def delete_comment(commentId):
    """
    Delete a comment based on commentId
    """
    comment = Comment.query.get(commentId)
    # Check if comment exists:
    if comment is None:
        return {"errors": ["Not Found"]}, 404

    # Check if comment belongs to current user:
    if comment.userId != current_user.id:
        return {"errors": ["Unauthorized"]}, 401

    db.session.delete(comment)
    db.session.commit()

    return {"Message": "Successfully Deleted"}, 200
