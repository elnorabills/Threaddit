
const CREATE_COMMENT = "comments/create";
const EDIT_COMMENT = "comments/create";
const DELETE_COMMENT = "comments/delete";


// ACTIONS:

// Action: CREATE comment
export const createComment = (comment, answerId) => {
  return {
    type: CREATE_COMMENT,
    payload: {
      comment,
      answerId,
    },
  };
};

// Action: EDIT (PUT) comment
export const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        payload: comment
    }
}

// Action: DELETE comment
export const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    payload: commentId,
  };
};


// THUNKS:

// Thunk: CREATE comments
export const fetchCreateComment = (answerId, comments) => async (dispatch) => {
  const res = await fetch(`/api/answers/${answerId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comments),
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(createComment(comment, answerId));
    return comment;
  }
  return res;
};

// Thunk: EDIT (PUT) comment
export const fetchEditComments = (comment) => async (dispatch) => {
  const res = await fetch(`/api/comments/${comment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(editComment(comment));
    return comment;
  }
  return res;
};

// Thunk: DELETE comment
export const fetchDeleteComment = (commentId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(deleteComment(comment));
    return comment;
  }
  return res;
};

// ******** REDUCER ********
const initialState = {};

const commentsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case CREATE_COMMENT:
      newState = {
        ...state,
        [action.payload.comment.id]: action.payload.comment,
      };
      return newState;
    case EDIT_COMMENT:
      newState = action.payload;
      return newState;
    case DELETE_COMMENT:
      delete newState[action.payload];
      return newState;
    default:
      return newState;
  }
};

export default commentsReducer;
