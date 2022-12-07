
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCreateQuestions } from "../../../store/questions";
import "./QuestionCreateForm.css";

function QuestionCreateForm({ setShowModal }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      body,
      postCategory,
    };

    const createdQuestion = await dispatch(fetchCreateQuestions(payload))
      .then((res) => {
        setShowModal(false);
        return res;
      })
      .then((res) => {
        history.push(`/questions/${res.id}`);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors);
      });

    return createdQuestion;
  };



  return (
    <form onSubmit={handleSubmit} className="modal-container">
      <h2 className="modal-form-title">Create A Post</h2>
      <textarea
        className="modal-input-title"
        type="text"
        id="title"
        minLength={1}
        maxLength={200}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        placeholder="Title"
        required
      />
      <textarea
        className="modal-input-body"
        id="body"
        type="text"
        minLength={1}
        maxLength={2000}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        name="body"
        placeholder="Text (optional)"
      />
      {validationErrors && (
        <ul>
          {validationErrors.map((error) => (
            <li className="errors" key={error}>
              {error}
            </li>
          ))}
        </ul>
      )}
      <div className="modal-buttons-div">
        <button className="modal-btn modal-submit-btn" type="submit">
          Submit
        </button>
        <button
          className="modal-btn modal-cancel-btn"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default QuestionCreateForm;
