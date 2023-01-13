from flask import Blueprint, jsonify, session, request
from app.models import User, db, Question, Answer, Comment, Vote
from app.forms import QuestionForm, AnswerForm, LoginForm, SignUpForm, VoteForm
from flask_login import current_user, login_user, logout_user, login_required
from app.api.auth_routes import validation_errors_to_error_messages

bp_question_routes = Blueprint('question', __name__)


# GET all questions
@bp_question_routes.route('')
def get_all_questions():
    """
    Get all questions
    """
    questions = Question.query.all()
    return {"Questions": [question.to_dict() for question in questions]}, 200


# GET one question
@bp_question_routes.route('/<int:questionId>')
@login_required
def get_one_question(questionId):
    """
    Get a question based on questionId
    """
    question = Question.query.get(questionId)
    return {"Question": question.to_dict_nested()}, 200

# GET all questions based on postCategory: t/gaming
@bp_question_routes.route('/gaming')
@login_required
def get_gaming_postCategory():
    """
    Get all questions from t/gaming
    """
    questions = Question.query.filter_by(postCategory="t/gaming").all()

    return {'Questions': [question.to_dict() for question in questions]}

# GET all questions based on postCategory: t/movies
@bp_question_routes.route('/movies')
@login_required
def get_movies_postCategory():
    """
    Get all questions from t/movies
    """
    questions = Question.query.filter_by(postCategory="t/movies").all()

    return {'Questions': [question.to_dict() for question in questions]}

# GET all questions based on postCategory: t/AskThreaddit
@bp_question_routes.route('/askThreaddit')
#@login_required
def get_askThreaddit_postCategory():
    """
    Get all questions from t/askThreaddit
    """
    questions = Question.query.filter_by(postCategory="t/AskThreaddit").all()

    return {'Questions': [question.to_dict() for question in questions]}

# GET all questions based on postCategory: t/askScience
@bp_question_routes.route('/askScience')
@login_required
def get_askScience_postCategory():
    """
    Get all questions from t/askScience
    """
    questions = Question.query.filter_by(postCategory="t/AskScience").all()

    return {'Questions': [question.to_dict() for question in questions]}

# GET all questions based on postCategory: t/DoesAnybodyElse
@bp_question_routes.route('/doesAnybodyElse')
@login_required
def get_doesAnybodyElse_postCategory():
    """
    Get all questions from t/doesAnybodyElse
    """
    questions = Question.query.filter_by(postCategory="t/DoesAnybodyElse").all()

    return {'Questions': [question.to_dict() for question in questions]}


# POST a question
@bp_question_routes.route('', methods=['POST'])
@login_required
def post_question():
    """
    Create a question
    """
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # Make new question on question form
    if form.validate_on_submit():
        question = Question(
            userId=current_user.id,
            title=form.data['title'],
            body=form.data['body'],
            postCategory=form.data['postCategory']
        )
        db.session.add(question)
        db.session.commit()
        return question.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# UPDATE a question
@bp_question_routes.route('/<int:questionId>', methods=['PUT'])
@login_required
def update_question(questionId):
    """
    Edit a question based on questionId
    """
    question = Question.query.get(questionId)
    # Check if question exists:
    if question is None:
        return {"errors": ["Not Found"]}, 404

    # Check if question belongs to current user:
    if question.userId != current_user.id:
        return {"errors": ["Unauthorized"]}, 401

    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # Edit question on question form
    if form.validate_on_submit():
        question.title=form.data['title']
        question.body=form.data['body']
        db.session.commit()
        return question.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# DELETE a question
@bp_question_routes.route('/<int:questionId>', methods=['DELETE'])
@login_required
def delete_question(questionId):
    """
    Delete question based on questionId
    """
    question = Question.query.get(questionId)
    # Check is question exists:
    if question is None:
        return {"errors": ["Not Found"]}, 404

    # Check if question belongs to current user:
    if question.userId != current_user.id:
        return {"errors": ["Unauthorized"]}, 401

    db.session.delete(question)
    db.session.commit()

    return {"Message": "Successfully Deleted"}, 200


# POST an answer to a question
@bp_question_routes.route('/<int:questionId>/answers', methods=['POST'])
@login_required
def post_answer(questionId):
    """
    Post an answer to a question
    """
    question = Question.query.get(questionId)
    # Check if question exists:
    if question is None:
        return {"errors": ["Not Found"]}, 404

    form = AnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # Make new answer on answer form:
    if form.validate_on_submit():
        answer = Answer(
            userId=current_user.id,
            questionId=questionId,
            body=form.data['body']
        )

        db.session.add(answer)
        db.session.commit()
        return answer.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Post a vote on a question
@bp_question_routes.route('/<int:questionId>/votes', methods=['POST'])
@login_required
def create_vote(questionId):
    """
    Upvote or Downvote a question based on questionId
    """
    question = Question.query.get(questionId)
    # Check if question exists:
    if question is None:
        return {"errors": ["Not Found"]}, 404

    hasVoted = Vote.query.filter(question.id == Vote.questionId).filter(current_user.id == Vote.userId).all()
    if len(hasVoted) > 0:
        return {"errors": ["Already Voted"]}, 404

    form = VoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # Make vote on vote form
    if form.validate_on_submit():
        new_vote = Vote(
            userId=current_user.id,
            questionId=questionId,
            voteDirection=form.data['voteDirection']
        )

        db.session.add(new_vote)
        db.session.commit()
        return new_vote.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
