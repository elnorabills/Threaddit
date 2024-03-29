
const CREATE_QUESTIONS = "questions/create";
const EDIT_QUESTIONS = "questions/edit";
const GET_USER_QUESTIONS = "user_questions/get";
const GET_PC_QUESTIONS = "pc_questions/get";
const GET_ALL_QUESTIONS = "questions/get";
const GET_QUESTION = "question/get";
const DELETE_QUESTIONS = "questions/delete";
const DELETE_VOTE = "vote/delete";
const CREATE_VOTE = "vote/create";

// ACTIONS:

// Action: CREATE questions
export const createQuestions = (question) => {
  return {
    type: CREATE_QUESTIONS,
    payload: question,
  };
};

// Action: EDIT (PUT) questions
export const editQuestions = (question) => {
  return {
    type: EDIT_QUESTIONS,
    payload: question,
  };
};

// Action: GET user questions
export const getUserQuestions = (questions) => ({
  type: GET_USER_QUESTIONS,
  payload: questions,
});

// Action: GET pc questions
export const getPCQuestions = (questions) => ({
  type: GET_PC_QUESTIONS,
  payload: questions,
});

// Action: GET all questions
export const getAllQuestions = (questions) => {
  return {
    type: GET_ALL_QUESTIONS,
    payload: questions,
  };
};

// Action: GET one question
export const getQuestion = (question) => {
  return {
    type: GET_QUESTION,
    payload: question,
  };
};

// Action: DELETE question
export const deleteQuestions = (questionId) => {
  return {
    type: DELETE_QUESTIONS,
    payload: questionId,
  };
};

// Action: DELETE vote
export const deleteVote = (voteId) => ({
  type: DELETE_VOTE,
  payload: voteId,
});

// Action: Create vote
export const createVote = (questionId) => ({
  type: CREATE_VOTE,
  payload: questionId,
});


// THUNKS:

// Thunk: CREATE question
export const fetchCreateQuestions = (question) => async (dispatch) => {
  const res = await fetch(`/api/questions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(question),
  });

  if (res.ok) {
    const question = await res.json();
    dispatch(createQuestions(question));
    return question;
  }
  return res;
};

// Thunk: EDIT (PUT) question
export const fetchEditQuestions = (question) => async (dispatch) => {
  const res = await fetch(`/api/questions/${question.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(question),
  });

  if (res.ok) {
    const question = await res.json();
    dispatch(editQuestions(question));
    return question;
  }
  return res;
};

// Thunk: GET user questions
export const fetchUserQuestions = () => async (dispatch) => {
  const res = await fetch(`/api/users/questions`);

  if (res.ok) {
    const questions = await res.json();

    dispatch(getUserQuestions(questions));

    return res;
  }
};

// Thunk: GET gaming questions
export const fetchGamingQuestions = () => async (dispatch) => {
  const res = await fetch(`/api/questions/gaming`);

  if (res.ok) {
    const questions = await res.json();

    dispatch(getPCQuestions(questions));

    return res;
  }
};

// Thunk: GET movie questions
export const fetchMovieQuestions = () => async (dispatch) => {
  const res = await fetch(`/api/questions/movies`);

  if (res.ok) {
    const questions = await res.json();

    dispatch(getPCQuestions(questions));

    return res;
  }
};

// Thunk: GET askThreaddit questions
export const fetchAskThreadditQuestions = () => async (dispatch) => {
  const res = await fetch(`/api/questions/askThreaddit`);

  if (res.ok) {
    const questions = await res.json();

    dispatch(getPCQuestions(questions));

    return res;
  }
};

// Thunk: GET askScience questions
export const fetchAskScienceQuestions = () => async (dispatch) => {
  const res = await fetch(`/api/questions/askScience`);

  if (res.ok) {
    const questions = await res.json();

    dispatch(getPCQuestions(questions));

    return res;
  }
};

// Thunk: GET doesAnybodyElse questions
export const fetchDAEQuestions = () => async (dispatch) => {
  const res = await fetch(`/api/questions/doesAnybodyElse`);

  if (res.ok) {
    const questions = await res.json();

    dispatch(getPCQuestions(questions));

    return res;
  }
};

// Thunk: GET all questions
export const fetchAllQuestions = () => async (dispatch) => {
  const res = await fetch(`/api/questions`);

  if (res.ok) {
    const questions = await res.json();
    dispatch(getAllQuestions(questions));
    return questions;
  }
  return res;
};

// Thunk: GET one question
export const fetchQuestion = (questionId) => async (dispatch) => {
  const res = await fetch(`/api/questions/${questionId}`);

  if (res.ok) {
    const question = await res.json();
    dispatch(getQuestion(question));
    return question;
  }
  return res;
};

// Thunk: DELETE question
export const fetchDeleteQuestions = (questionId) => async (dispatch) => {
  const res = await fetch(`/api/questions/${questionId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const question = await res.json();
    dispatch(deleteQuestions(question));
    return question;
  }
  return res;
};

// Thunk: DELETE vote
export const fetchDeleteVote = (voteId) => async (dispatch) => {
  let response;
  response = await fetch(`/api/votes/${voteId}`, { method: "DELETE" });

  if (response.ok) {
    const question = await response.json();
    dispatch(deleteVote(voteId));
  }

  return response;
};

// Thunk: CREATE vote
export const fetchCreateVote =
  (questionId, voteDirection) => async (dispatch) => {
    let response;
    console.log(questionId, voteDirection)

    response = await fetch(`/api/questions/${questionId}/votes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ voteDirection }),
    });
    console.log(response);
    if (response.ok) {
      const question = await response.json();
      dispatch(createVote(voteDirection));
    }

    return response;
  };


// REDUCER:
const initialState = {};

const questionsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_USER_QUESTIONS:
      newState.user_questions = {};
      action.payload["Questions"].forEach(
        (question) => (newState.user_questions[question.id] = question)
      );
      return newState;
    case GET_PC_QUESTIONS:
      newState.pc_questions = {};
      action.payload["Questions"].forEach(
        (question) => (newState.pc_questions[question.id] = question)
      );
      return newState;
    case GET_ALL_QUESTIONS:
      newState.all_questions = {};
      action.payload["Questions"].forEach(
        (question) => (newState.all_questions[question.id] = question)
      );
      return newState;
    case GET_QUESTION:
      newState.one_question = {};
      newState.one_question = action.payload;
      return newState;
    case CREATE_QUESTIONS:
      newState = { ...state, [action.payload.id]: action.payload };
      return newState;
    case EDIT_QUESTIONS:
      newState = action.payload;
      return newState;
    case DELETE_QUESTIONS:
      delete newState[action.payload];
      return newState;
    default:
      return newState;
  }
};

export default questionsReducer;
