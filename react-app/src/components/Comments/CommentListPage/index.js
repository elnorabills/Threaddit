
import React from "react";
import CommentListItem from "../CommentListItem";
import "./CommentListPage.css";

function CommentListPage({ commentList, refreshQuestion }) {

  return (
    <div className="cl-container">
      {commentList &&
        commentList.map((comment) => {
          return (
            <CommentListItem
              comment={comment}
              refreshQuestion={refreshQuestion}
            ></CommentListItem>
          );
        })}
    </div>
  );
}

export default CommentListPage;
