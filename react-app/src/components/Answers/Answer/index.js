
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../Modal-Context/Modal";
import CommentListPage from "../../Comments/CommentListPage";
import CommentCreateForm from "../../Comments/CommentCreateForm/index.js";
import AnswerEditForm from "../AnswerEditForm";
import AnswerDelete from "../AnswerDelete/index.js";
import "./Answer.css";

function Answer({ answer, refreshQuestion }) {

  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteAnswerModal, setDeleteAnswerModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const isOwner = sessionUser.id === answer?.userId;

  return (
    <div className="answer-container">
      <div className="answer-detail">
        <div className="a-posted-by">
          <i className="fa-solid fa-user" id="a-user"></i>
          {answer?.username}
        </div>
        <p className="answer-body">{answer?.body}</p>
      </div>
      <div className="answer-bottom">
        <div className="answer-actions-container">
          {isOwner && (
            <button
              className="comment-delete-button"
              onClick={() => setShowEditModal(true)}
            >
              Edit
            </button>
          )}
          {showEditModal && (
            <Modal onClose={() => setShowEditModal(false)}>
              <AnswerEditForm
                setShowEditModal={setShowEditModal}
                answer={answer}
                refreshQuestion={refreshQuestion}
              />
            </Modal>
          )}
          {isOwner && (
            <button
              className="comment-delete-button"
              onClick={() => setDeleteAnswerModal(true)}
            >
              Delete
            </button>
          )}
          {deleteAnswerModal && (
            <Modal onClose={() => setDeleteAnswerModal(false)}>
              <AnswerDelete
                answerId={answer?.id}
                setDeleteAnswerModal={setDeleteAnswerModal}
                refreshQuestion={refreshQuestion}
              />
            </Modal>
          )}
            <button
              className="reply-button"
              onClick={() => setCommentModal(true)}
            >
              <i className="fa-regular fa-message"></i>
              Reply
            </button>
            {commentModal && (
              <Modal onClose={() => setCommentModal(false)}>
                <CommentCreateForm
                  setCommentModal={setCommentModal}
                  answerId={answer?.id}
                  refreshQuestion={refreshQuestion}
                />
              </Modal>
            )}
        </div>
      </div>

      <div className="answer-commentlist">
        {answer?.Comments && (
          <CommentListPage
            commentList={answer.Comments}
            refreshQuestion={refreshQuestion}
          ></CommentListPage>
        )}
      </div>
    </div>
  );
}

export default Answer;
