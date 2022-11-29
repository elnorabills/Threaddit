
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCreateAnswer } from "../../../store/answers";
import "./AnswerCreateForm.css";

function AnswerCreateForm({ refreshQuestion, setShowAnswerModal }) {

  const dispatch = useDispatch();
  const { questionId } = useParams();
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

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
          placeholder="What are your thoughts?"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <ul className="errorMsg">
          {errors.map((error, idx) => (
            <li className="errors" key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <div>
          <button className="modal-btn modal-submit-btn">Submit</button>
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
