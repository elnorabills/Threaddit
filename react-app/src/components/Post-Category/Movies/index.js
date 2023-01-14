import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuestionListItem from "../../Questions/QuestionListItem";
import { fetchMovieQuestions } from "../../../store/questions";
import { Modal } from "../../../Modal-Context/Modal";
import QuestionCreateForm from "../../Questions/QuestionCreateForm";
import "./Movies.css"

const Movies = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const questions = Object.values(
    useSelector((state) =>
      state.questions?.pc_questions
        ? state.questions.pc_questions
        : state.questions
    )
  );

  useEffect(() => {
    dispatch(fetchMovieQuestions()).catch(async (res) => {});
  }, [dispatch]);

  return (
    <div>
      <div className="movies-cover-photo"></div>
      <div className="my-ql-header-askScience">
        <i id="flask" className="fa-solid fa-film"></i>
        <h2 className="h2-askScience">t/movies: Movie News and Discussion</h2>
      </div>
      <div className="science-container">
        <div className="my-ql-container">
          <button
            className="cp-button-science"
            onClick={() => setShowModal(true)}
          >
            Create Post
          </button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <QuestionCreateForm setShowModal={setShowModal} />
            </Modal>
          )}
          {questions &&
            questions.map((question) => (
              <QuestionListItem question={question}></QuestionListItem>
            ))}
        </div>
        <div>
          <div className="ab-comm-blackbox">
            <h3 className="ab-comm-text">About Community</h3>
          </div>
          <div className="about-community-container">
            <div className="ab-comm-bodybox">
              <h3 className="ab-comm-body">
                The goal of /r/Movies is to provide an inclusive place for
                discussions and news about films with major releases.
              </h3>
            </div>
            <div className="created-box">
              <i class="fa-solid fa-cake-candles"></i>
              <h3 className="created-text">Created Dec 9, 2022</h3>
            </div>
            <div className="ab-comm-bodybox">
              <h3 className="ab-comm-body">
                Submissions should be for the purpose of informing or initiating
                a discussion, not just to entertain readers.
              </h3>
            </div>
            <button
              className="cp-button-ab-comm"
              onClick={() => setShowModal(true)}
            >
              Create Post
            </button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <QuestionCreateForm setShowModal={setShowModal} />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
