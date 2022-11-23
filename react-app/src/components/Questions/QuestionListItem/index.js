
import { NavLink } from "react-router-dom";
import React from "react";
import "./QuestionListItem.css";

function QuestionListItem({ question }) {

  return (
    <div className="qli-container">
      <NavLink className="qli-link" to={`/questions/${question.id}`}>
        <h3 className="qli-title">{question?.title}</h3>
      </NavLink>
      <p>Posted by: {question?.username}</p>
    </div>
  );
}

export default QuestionListItem;
