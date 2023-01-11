
import React from "react";
import { NavLink } from "react-router-dom";
import circle_img from "../../../images/new_circle.png";
import "./AnswerListItem.css";

function AnswerListItem({ answer }) {

  return (
    <div>
      {answer && (
        <div className="qli-container">
          <div className="img-and-username-header">
            <img className="qli-circle-img" src={circle_img} />
            <p className="qli-username">Commented by: {answer.username}</p>
          </div>
          <NavLink className="qli-link" to={`/questions/${answer.questionId}`}>
            <h3 className="qli-title">{answer?.body}</h3>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default AnswerListItem;
