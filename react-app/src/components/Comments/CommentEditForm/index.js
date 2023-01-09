// For extra functionality to make full crud

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEditComments } from "../../../store/comments";
import "./CommentEditForm.css";

function CommentEditForm({ comment, refreshQuestion, setShowEditModal }) {
  const dispatch = useDispatch();
  const [body, setBody] = useState(comment?.body);
  const [errors, setErrors] = useState([]);

  let submitButton;
  if (body.trim().length > 1) {
    submitButton = (
      <button disabled={!body} className="modal-btn modal-submit-btn">
        Submit
      </button>
    );
  }

  useEffect(() => {
    const arr = [];
    if (body.split(" ").length === body.length + 1 || body.length < 0) {
      arr.push("Must contain at least one character in text body");
    }
    setErrors(arr);
  }, [body]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      body,
    };

    return dispatch(fetchEditComments(payload, comment?.id))
      .then(refreshQuestion())
      .then(refreshQuestion())
      .then(setShowEditModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="modal-container">
      <h2 className="modal-form-title">Edit Response</h2>
      <form className="answerCreateForm" onSubmit={onSubmit}>
        <textarea
          className="modal-input-body"
          type="text"
          name="body"
          id="body"
          minLength={1}
          maxLength={2000}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="What are your thoughts?"
          required
        ></textarea>
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        {/* <button className="modal-btn modal-submit-btn">Submit</button> */}
        {submitButton}
        <button
          className="modal-btn modal-cancel-btn"
          onClick={() => setShowEditModal(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CommentEditForm;
