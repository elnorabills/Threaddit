import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuestionListItem from "../../Questions/QuestionListItem";
import { fetchAskScienceQuestions } from "../../../store/questions";
import { Modal } from "../../../Modal-Context/Modal";
import QuestionCreateForm from "../../Questions/QuestionCreateForm";
import "./AskScience.css"

const AskScience = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const questions = Object.values(
    useSelector((state) =>
      state.questions?.pc_questions
        ? state.questions.pc_questions
        : state.questions
    )
  );

  useEffect(() => {
    dispatch(fetchAskScienceQuestions()).catch(async (res) => {});
  }, [dispatch]);

  return (
    <div>
      <div className="science-cover-photo"></div>
      <div className="my-ql-header-askScience">
        <i id="flask" className="fa-solid fa-flask"></i>
        <h2 className="h2-askScience">
          t/AskScience: Got Questions? Get Answers.
        </h2>
      </div>
      <div className="science-container">
        <div className="my-ql-container">
          <button
            className="cp-button-science"
            onClick={() => setShowModal(true)}
          >
            Create Post
          </button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <QuestionCreateForm setShowModal={setShowModal} />
            </Modal>
          )}
          {questions &&
            questions.map((question) => (
              <QuestionListItem question={question}></QuestionListItem>
            ))}
        </div>
        <div>
          <div className="ab-comm-blackbox">
            <h3 className="ab-comm-text">About Community</h3>
          </div>
          <div className="about-community-container">
            <div className="ab-comm-bodybox">
              <h3 className="ab-comm-body">
                Ask a science question, get a science answer.
              </h3>
            </div>
            <div className="created-box">
              <i class="fa-solid fa-cake-candles"></i>
              <h3 className="created-text">Created Dec 6, 2022</h3>
            </div>
            <div className="ab-comm-bodybox">
              <h3 className="ab-comm-body">
                AskScience is a forum for answering science questions. It aims
                to promote scientific literacy by helping people understand the
                scientific process and what it can achieve.
              </h3>
            </div>
            <button
              className="cp-button-ab-comm"
              onClick={() => setShowModal(true)}
            >
              Create Post
            </button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <QuestionCreateForm setShowModal={setShowModal} />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskScience;
