from .db import db
from .answer import Answer
from .comment import Comment
from .vote import Vote
from .user import User
from datetime import datetime
from flask_login import login_required, current_user

class Question(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String(200), nullable=False)
    body = db.Column(db.String(2000))
    postCategory = db.Column(db.String(25), nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, onupdate=datetime.utcnow)


    # Relationships
    user = db.relationship('User', back_populates='questions')
    answers = db.relationship('Answer', back_populates='question',cascade='all, delete-orphan')
    votes = db.relationship('Vote', back_populates='question', cascade='all, delete-orphan')

    # Get user's username to display on the frontend
    def get_user(self):
        user = User.query.filter(User.id == self.userId).first()
        return user.username

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'username': self.get_user(),
            'title': self.title,
            'body': self.body,
            'postCategory': self.postCategory,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }

    def get_votes(self):
        count = 0
        voted = True
        upVote = Vote.query.filter(Vote.questionId == self.id).filter(Vote.voteDirection=='Up').all()
        if upVote is None:
            up = 0
        else:
            up = len(upVote)
        downVote = Vote.query.filter(Vote.questionId == self.id).filter(Vote.voteDirection=='Down').all()
        if downVote is None:
            down = 0
        else:
            down = len(downVote)
        count = count + up
        count = count - down
        hasVoted = Vote.query.filter(Vote.questionId == self.id).filter(Vote.userId == current_user.id).all()
        print(len(hasVoted))
        if len(hasVoted) == 0 :
            voted = False
        vote_id = Vote.query.filter(Vote.questionId == self.id).filter(Vote.userId == current_user.id).first()
        if vote_id is not None:
            vid = vote_id.id
            vdir = vote_id.voteDirection
        if vote_id is None:
            vid = None
            vdir = None
        return {
            "total" : count,
            "hasVoted" : voted,
            "voteId" : vid,
            "voteDirection" : vdir
        }

    def to_dict_nested(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'username': self.get_user(),
            'title': self.title,
            'body': self.body,
            'postCategory': self.postCategory,
            'created_on': self.created_on,
            'updated_on': self.updated_on,
            'Answers' : [answer.to_dict_nested() for answer in self.answers],
            'Votes' : self.get_votes()
        }
