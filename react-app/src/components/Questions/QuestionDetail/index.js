
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Question from "../Question";
import AnswerListPage from "../../Answers/AnswerListPage";
import { fetchQuestion } from "../../../store/questions";

function QuestionDetail() {
  const { questionId } = useParams();
  const parsedId = parseInt(questionId, 10);
  const dispatch = useDispatch();

  const question = useSelector((state) => state.questions);
  const answers = question.one_question?.Question?.Answers;

  const refreshQuestion = () => {
    dispatch(fetchQuestion(parsedId));
  };

  useEffect(() => {
    refreshQuestion();
  }, [dispatch]);

  return (
    <div className="qdp-container">
      <Question
        question={question.one_question?.Question}
        refreshQuestion={refreshQuestion}
      />
      <AnswerListPage
        answerList={answers}
        questionId={parsedId}
        refreshQuestion={refreshQuestion}
      />
    </div>
  );
}

export default QuestionDetail;
