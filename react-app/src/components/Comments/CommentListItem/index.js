
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../Modal-Context/Modal";
import CommentDelete from "../CommentDelete/";
import "./CommentListItem.css";

function CommentListItem({ comment, refreshQuestion }) {

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
      </div>
    </div>
  );
}

export default CommentListItem;
