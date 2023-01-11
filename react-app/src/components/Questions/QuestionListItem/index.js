
import { NavLink } from "react-router-dom";
import React from "react";
import circle_img from "../../../images/new_circle.png";
import "./QuestionListItem.css";

function QuestionListItem({ question }) {

  return (
    <div className="qli-container">
      <div className="qli-heading">
        <img className="qli-circle-img" src={circle_img} />
        <p className="qli-postCategory">{question?.postCategory}</p>
        <p className="qli-username">Posted by: {question?.username}</p>
      </div>
      <NavLink className="qli-link" to={`/questions/${question.id}`}>
        <h3 className="qli-title">{question?.title}</h3>
      </NavLink>
    </div>
  );
}

export default QuestionListItem;
