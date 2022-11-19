from flask import Blueprint
from flask_login import login_required, current_user

from app.models import db, Vote
from app.forms import VoteForm
from app.api.auth_routes import validation_errors_to_error_messages

bp_vote_routes = Blueprint('votes', __name__)


# DELETE a vote
@bp_vote_routes.route('/<int:voteId>', methods=['DELETE'])
@login_required
def delete_vote(voteId):
    """
    Delete a vote based on voteId
    """
    vote = Vote.query.get(voteId)
    # Check if vote exists:
    if vote is None:
        return {"errors": ["Not Found"]}, 404

    # Check if vote belongs to current user:
    if vote.userId != current_user.id:
        return {"errors": ["Unauthorized"]}, 401

    db.session.delete(vote)
    db.session.commit()

    return {"Message": "Successfully Deleted"}, 200
