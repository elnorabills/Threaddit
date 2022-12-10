
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
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

  let submitButton;
  if (title.trim().length === 0 || body.trim().length === 0) {
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

  // if (title.trim().length > 1 && body.trim().length > 1) {
  //   submitButton = (
  //     <button disabled={!title} className="modal-btn modal-submit-btn">
  //       Submit
  //     </button>
  //   );
  // }

  // useEffect(() => {
  //   const arr = [];
  //   if (title.split(" ").length === title.length + 1 || title.length < 0) {
  //     arr.push("Must contain at least one character in title body");
  //   }
  //   if (body.split(" ").length === body.length + 1 || body.length < 0) {
  //     arr.push("Must contain at least one character in text body");
  //   }
  //   setValidationErrors(arr);
  // }, [title, body]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      body,
      postCategory,
    };

    // setValidationErrors([]);

    // const data = await dispatch(fetchCreateQuestions(payload))
    // if (data) {
    //   setValidationErrors(data)
    // } else {
    //   setShowModal(false)
    // }

    // // <Redirect to={`/questions/${data.id}`}/>
    // history.push('/profile')

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
        placeholder="Title (required)"
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
        placeholder="Text (required)"
        required
      />
      {validationErrors && (
        <ul>
          {validationErrors.map((error, ind) => (
            <li className="errors" key={ind}>
              {error}
            </li>
          ))}
        </ul>
      )}
      <div className="modal-buttons-div">
        {/* <button className="modal-btn modal-submit-btn" type="submit">
          Submit
        </button> */}
        {submitButton}
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
