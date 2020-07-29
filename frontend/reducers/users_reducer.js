import { RECEIVE_CURRENT_USER, REMOVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const next = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser,
      });
    case REMOVE_USER:
      delete next[action.userId];
      return next;
    default:
      return state;
  }
};

export default usersReducer;
