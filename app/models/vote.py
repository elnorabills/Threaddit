from .db import db
from datetime import datetime

class Vote(db.Model):
    __tablename__ = 'votes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    questionId = db.Column(db.Integer, db.ForeignKey('questions.id'))
    voteDirection = db.Column(db.String)
    created_on = db.Column(db.Date, default=datetime.utcnow)
    updated_on = db.Column(db.Date, onupdate=datetime.utcnow)

    # Relationships
    user = db.relationship('User', back_populates='votes')
    question = db.relationship('Question', back_populates='votes')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'questionId': self.questionId,
            'voteDirection': self.voteDirection,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }
