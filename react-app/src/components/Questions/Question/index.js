
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../Modal-Context/Modal";
import QuestionEditForm from "../QuestionEditForm";
import QuestionDelete from "../QuestionDelete";
import AnswerCreateForm from "../../Answers/AnswerCreateForm";
import circle_img from "../../../images/new_circle.png";
import "./Question.css";

function Question({ question, refreshQuestion }) {

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const isOwner = sessionUser.id === question?.userId;

  return (
    <div className="q-container">
      <div className="q-detail">
        <div className="q-heading">
          <img className="q-circle-img" src={circle_img} />
          <div className="q-postCategory">{question?.postCategory}</div>
          <div className="q-posted-by">Posted by: {question?.username}</div>
        </div>
        <div className="q-title">{question?.title}</div>
        <div className="q-body">{question?.body}</div>

        <div className="q-bottom">
          <div className="q-actions-container">
            {isOwner && (
              <button
                className="link-edit-button"
                onClick={() => setShowEditModal(true)}
              >
                Edit{" "}
              </button>
            )}
            {showEditModal && (
              <Modal onClose={() => setShowEditModal(false)}>
                <QuestionEditForm
                  setShowEditModal={setShowEditModal}
                  question={question}
                  refreshQuestion={refreshQuestion}
                />
              </Modal>
            )}
            {isOwner && (
              <button
                className="link-delete-button"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete
              </button>
            )}
            {showDeleteModal && (
              <Modal onClose={() => setShowDeleteModal(false)}>
                <QuestionDelete
                  setShowDeleteModal={setShowDeleteModal}
                  questionId={question?.id}
                  refreshQuestion={refreshQuestion}
                />
              </Modal>
            )}
          </div>
        </div>
      </div>
      <div className="postAnswer">
        {
          <button
            className="q-comment-button"
            onClick={() => setShowAnswerModal(true)}
          >
            Comment as{" "}
            <div className="red-username">{sessionUser?.username}</div>
          </button>
        }
        {showAnswerModal && (
          <Modal onClose={() => setShowAnswerModal(false)}>
            <AnswerCreateForm
              setShowAnswerModal={setShowAnswerModal}
              refreshQuestion={refreshQuestion}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Question;
