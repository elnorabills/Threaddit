import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuestionListItem from "../../Questions/QuestionListItem";
import { fetchDAEQuestions } from "../../../store/questions";
import { Modal } from "../../../Modal-Context/Modal";
import QuestionCreateForm from "../../Questions/QuestionCreateForm";
import "./DoesAnybodyElse.css"

const DoesAnybodyElse = () => {
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
    dispatch(fetchDAEQuestions()).catch(async (res) => {});
  }, [dispatch]);

  return (
    <div>
      <div className="DAE-cover-photo"></div>
      <div className="my-ql-header-askScience">
        <i id="flask" className="fa-solid fa-people-arrows"></i>
        <h2 className="h2-askScience">
          t/DoesAnybodyElse: Does anybody else...?
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
              <h3 className="ab-comm-body">Welcome to t/DoesAnybodyElse</h3>
            </div>
            <div className="created-box">
              <i class="fa-solid fa-cake-candles"></i>
              <h3 className="created-text">Created Dec 7, 2022</h3>
            </div>
            <div className="ab-comm-bodybox">
              <h3 className="ab-comm-body">
                Number one rule: Do not take opinions ("DAE think Charlie Sheen
                sucks"), questions ("DAE live in Texas?"), and/or facts ("DAE
                know that you can use Windows+L to lock your computer?") and
                manipulate the phrasing to make it a DAE post.
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

export default DoesAnybodyElse;
