
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserAnswers } from "../../../store/answers";
import AnswerListItem from "../AnswerListItem";
import "./MyAnswers.css";

function MyAnswers() {

  const dispatch = useDispatch();
  const myAnswers = Object.values(useSelector((state) => state.answers));
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, SetIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchGetUserAnswers()).then(SetIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="my-al-container">
      <div className="my-al-header">
        <h2 className="my-comments">My Comments</h2>
      </div>
      {myAnswers &&
        isLoaded &&
        myAnswers.map((answer) => {
          if (sessionUser.id === answer.userId) {
            return <AnswerListItem answer={answer}> </AnswerListItem>;
          }
        })}
    </div>
  );
}

export default MyAnswers;
