
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../Modal-Context/Modal";
import CommentDelete from "../CommentDelete/";
import CommentEditForm from "../CommentEditForm";
import "./CommentListItem.css";

function CommentListItem({ comment, refreshQuestion }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const isOwner = sessionUser.id === comment?.userId;

  return (
    <div className="cli-container">
      <div className="cli-detail">
        <div className="commented-by">
          <i className="fa-solid fa-user" id="a-user"></i>
          {comment?.username}
        </div>
        <p className="comment-body">{comment?.body}</p>
      </div>
      <div className="cli-actions-container">
        {isOwner && (
          <button
            className="comment-delete-button"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
        )}
        {showDeleteModal && (
          <Modal onClose={() => setShowDeleteModal(false)}>
            <CommentDelete
              commentId={comment?.id}
              setShowDeleteModal={setShowDeleteModal}
              refreshQuestion={refreshQuestion}
            />
          </Modal>
        )}
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
            <CommentEditForm
              setShowEditModal={setShowEditModal}
              comment={comment}
              refreshQuestion={refreshQuestion}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default CommentListItem;
