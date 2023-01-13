import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuestionListItem from "../../Questions/QuestionListItem";
import { fetchAskThreadditQuestions } from "../../../store/questions";

const AskThreaddit = () => {
  const dispatch = useDispatch();

  const questions = Object.values(
    useSelector((state) =>
      state.questions?.pc_questions
        ? state.questions.pc_questions
        : state.questions
    )
  );

  useEffect(() => {
    dispatch(fetchAskThreadditQuestions()).catch(async (res) => {});
  }, [dispatch]);

  return (
    <div className="profile-container">
      <div className="my-ql-container">
        <div className="my-ql-header">
          <h2 className="my-posts">t/AskThreaddit</h2>
        </div>
        {questions &&
          questions.map((question) => (
            <QuestionListItem question={question}></QuestionListItem>
          ))}
      </div>
    </div>
  );
};

export default AskThreaddit;
