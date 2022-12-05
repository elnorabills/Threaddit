
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuestionListItem from "../QuestionListItem";
import { fetchUserQuestions } from "../../../store/questions";
import "./MyQuestions.css";

function MyQuestions() {

  const dispatch = useDispatch();
  const [validationErrors, setValidationErrors] = useState([]);

  const questions = Object.values(
    useSelector((state) =>
      state.questions?.user_questions
        ? state.questions.user_questions
        : state.questions
    )
  );

  useEffect(() => {
    dispatch(fetchUserQuestions()).catch(async (res) => {
    });
  }, [dispatch]);

  return (
    <div className="my-ql-container">
      <div className="my-ql-header">
        <h2 className="my-posts">My Posts</h2>
      </div>
      {questions &&
        questions.map((question) => (
          <QuestionListItem question={question}></QuestionListItem>
        ))}
    </div>
  );
}

export default MyQuestions;
