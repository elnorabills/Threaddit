
import React from "react";
import { NavLink } from "react-router-dom";
import "./AnswerListItem.css";

function AnswerListItem({ answer }) {

  // let answerBody;
  // answer?.body && answer?.body?.length >= 50
  //   ? (answerBody = answer?.body?.substring(0, 50) + " ...")
  //   : (answerBody = answer?.body);
  return (
    <div>
      {answer && (
        <div className="qli-container">
          <p className="qli-username">Commented by: {answer.username}</p>
          <NavLink className="qli-link" to={`/questions/${answer.questionId}`}>
            <h3 className="qli-title">{answer?.body}</h3>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default AnswerListItem;
