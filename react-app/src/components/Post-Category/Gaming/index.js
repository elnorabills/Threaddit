import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuestionListItem from "../../Questions/QuestionListItem";
import { fetchGamingQuestions } from "../../../store/questions";

const Gaming = () => {
    const dispatch = useDispatch();

    const questions = Object.values(
      useSelector((state) =>
        state.questions?.pc_questions
          ? state.questions.pc_questions
          : state.questions
      )
    );

     useEffect(() => {
       dispatch(fetchGamingQuestions()).catch(async (res) => {});
     }, [dispatch]);

    return (
      <div className="profile-container">
        <div className="my-ql-container">
          <div className="my-ql-header">
            <h2 className="my-posts">t/gaming</h2>
          </div>
          {questions &&
            questions.map((question) => (
              <QuestionListItem question={question}></QuestionListItem>
            ))}
        </div>
      </div>
    );
}

export default Gaming;
