
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCreateAnswer } from "../../../store/answers";
import "./AnswerCreateForm.css";

function AnswerCreateForm({ refreshQuestion, setShowAnswerModal }) {

  const dispatch = useDispatch();
  const { questionId } = useParams();
  const [body, setBody] = useState("");
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

    return dispatch(fetchCreateAnswer(payload, questionId))
      .then(refreshQuestion())
      .then(refreshQuestion()) //double refresh to ensure changes are reflected on Question
      .then(setShowAnswerModal(false));
  };

  return (
    <div className="modal-container">
      <h2 className="modal-form-title">Post A Comment</h2>
      <form onSubmit={onSubmit}>
        <textarea
          className="modal-input-body"
          type="text"
          name="body"
          id="body"
          minLength={1}
          maxLength={2000}
          placeholder="What are your thoughts?"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <ul className="errors">
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
            onClick={() => setShowAnswerModal(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AnswerCreateForm;
