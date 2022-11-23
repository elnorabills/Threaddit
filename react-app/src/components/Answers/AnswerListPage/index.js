
import React from "react";
import Answer from "../Answer";
import "./AnswerListPage.css";

function AnswerListPage({ answerList, refreshQuestion }) {
  return (
    <div className="a-list-container">
      <div className="a-list-detail">
        <div className="answerList-size">
          <h4>{answerList?.length} Answers</h4>
        </div>
        {answerList &&
          answerList.map((answer) => {
            return (
              <Answer answer={answer} refreshQuestion={refreshQuestion}>
                {" "}
              </Answer>
            );
          })}
      </div>
    </div>
  );
}

export default AnswerListPage;
