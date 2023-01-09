
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCreateComment } from "../../../store/comments";

function CommentCreateForm({ answerId, refreshQuestion, setCommentModal }) {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  let submitButton;
  if (body.trim().length === 0) {
    submitButton = (
      <button disabled={true} className="modal-btn modal-submit-btn">
        Submit
      </button>
    );
  } else {
    submitButton = (
      <button className="modal-btn modal-submit-btn">Submit</button>
    );
  }
  // if (body.trim().length > 1) {
  //   submitButton = (
  //     <button disabled={!body} className="modal-btn modal-submit-btn">
  //       Submit
  //     </button>
  //   );
  // }

  // useEffect(() => {
  //   const arr = [];
  //   if (body.split(" ").length === body.length + 1 || body.length < 0) {
  //     arr.push("Must contain at least one character in text body");
  //   }
  //   setErrors(arr);
  // }, [body]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      body,
    };

    return dispatch(fetchCreateComment(answerId, payload))
      .then(refreshQuestion())
      .then(refreshQuestion()) //double refresh to ensure changes are reflected on Question
      .then(setCommentModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };
  return (
    <form className="modal-container" onSubmit={onSubmit}>
      <h2 className="modal-form-title">Respond To Comment</h2>
      <textarea
        className="modal-input-body"
        name="body"
        type="text"
        id="body"
        minLength={1}
        maxLength={2000}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="What are your thoughts?"
        required
      />
      <ul className="errorMsg">
        {errors.map((error, idx) => (
          <li className="errors" key={idx}>
            {error}
          </li>
        ))}
      </ul>
      <div>
        {/* <button className="modal-btn modal-submit-btn">Submit</button> */}
        {submitButton}
        <button
          className="modal-btn modal-cancel-btn"
          onClick={() => setCommentModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CommentCreateForm;
