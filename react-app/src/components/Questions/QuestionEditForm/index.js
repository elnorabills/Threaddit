
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEditQuestions } from "../../../store/questions";
import "./QuestionEditForm.css";

function QuestionEditForm({ setShowEditModal, question, refreshQuestion }) {

  const dispatch = useDispatch();

  const [title, setTitle] = useState(question?.title);
  const [body, setBody] = useState(question?.body);
  const [errors, setErrors] = useState([]);

  let submitButton;
  if (title.trim().length > 1 && body.trim().length > 1) {
    submitButton = (
      <button disabled={!title} className="modal-btn modal-submit-btn">
        Submit
      </button>
    );
  }

  useEffect(() => {
    const arr = [];
    if (title.split(" ").length === title.length + 1 || title.length < 0) {
      arr.push("Must contain at least one character in title body");
    }
    if (body.split(" ").length === body.length + 1 || body.length < 0) {
      arr.push("Must contain at least one character in text body");
    }
    setErrors(arr);
  }, [title, body]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: question?.id,
      title,
      body,
    };

    const editedQuestion = dispatch(fetchEditQuestions(payload))
      .then(refreshQuestion())
      .then(refreshQuestion())
      .then(() => {
        setShowEditModal(false);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });

    return editedQuestion;
  };

  return (
    <form className="modal-container" onSubmit={handleSubmit}>
      <h2 className="modal-form-title">Edit Post</h2>

      <textarea
        className="modal-input-title"
        type="text"
        minLength={1}
        maxLength={200}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        placeholder="Title (required)"
        required
      />
      <textarea
        className="modal-input-body"
        type="text"
        minLength={1}
        maxLength={2000}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        name="body"
        placeholder="Text (required)"
        required
      />
      <ul>
        {errors.length > 0 &&
          errors.map((error) => (
            <li className="errors" key={error}>
              {error}
            </li>
          ))}
      </ul>
      <div>
        {/* <button
          disabled={!title}
          className="modal-btn modal-submit-btn"
        >
          Submit
        </button> */}
        {submitButton}
        <button
          onClick={() => setShowEditModal(false)}
          className="modal-btn modal-cancel-btn"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default QuestionEditForm;
