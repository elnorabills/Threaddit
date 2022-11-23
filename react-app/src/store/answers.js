
const CREATE_ANSWER = "answers/create";
const EDIT_ANSWER = "answers/update";
const GET_USER_ANSWERS = "answers/load";
const DELETE_ANSWER = "answers/delete";

// ACTIONS:

// Action: CREATE answer
export const createAnswer = (answer, questionId) => ({
  type: CREATE_ANSWER,
  payload: {
    answer,
    questionId,
  },
});

// Action: EDIT (PUT) answer
export const editAnswer = (answer) => ({
  type: EDIT_ANSWER,
  payload: answer,
});

// Action: GET user answers
export const getUserAnswers = (answers) => ({
  type: GET_USER_ANSWERS,
  payload: answers,
});

// Action: DELETE answer
export const deleteAnswer = (id) => ({
  type: DELETE_ANSWER,
  payload: id,
});


// THUNKS:

// Thunk: CREATE answer
export const fetchCreateAnswer = (answer, questionId) => async (dispatch) => {
  let response;
  response = await fetch(`/api/questions/${questionId}/answers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answer),
  });

  if (response.ok) {
    const answer = await response.json();
    dispatch(createAnswer(answer, questionId));
  }

  return response;
};

// Thunk: EDIT (PUT) answer
export const fetchEditAnswer = (answer, answerId) => async (dispatch) => {
  let response;
  response = await fetch(`/api/answers/${answerId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answer),
  });

  if (response.ok) {
    const answer = await response.json();
    dispatch(editAnswer(answer));
  }

  return response;
};

// Thunk: GET user answers
export const fetchGetUserAnswers = () => async (dispatch) => {
  let response;

  response = await fetch("/api/users/answers");

  if (response.ok) {
    const answers = await response.json();
    dispatch(getUserAnswers(answers));
    return response;
  }
};

// Thunk: DELETE answer
export const fetchDeleteAnswer = (answerId) => async (dispatch) => {
  let response;
  response = await fetch(`/api/answers/${answerId}`, { method: "DELETE" });

  if (response.ok) {
    const responseMessage = await response.json();

    dispatch(deleteAnswer(answerId));
  }

  return response;
};


// REDUCER:
const initialState = {};

const answersReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_USER_ANSWERS:
      let userState = {};
      action.payload["Answers"].forEach((answer) => {
        userState[answer.id] = answer;
      });
      return userState;
    case CREATE_ANSWER:
      newState = { [action.payload.answer.id]: action.payload.answer };
      return newState;
    case EDIT_ANSWER:
      newState = action.payload;
      return newState;
    case DELETE_ANSWER:
      delete newState[action.payload];
      return newState;
    default:
      return newState;
  }
};

export default answersReducer;
