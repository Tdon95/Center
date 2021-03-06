import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_USER = "REMOVE_USER";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId,
});

export const fetchUser = (userId) => (dispatch) =>
  UserApiUtil.fetchUser(userId).then((user) =>
    dispatch(receiveCurrentUser(user))
  );

export const updateUser = (user) => (dispatch) =>
  UserApiUtil.updateUser(user).then((user) =>
    dispatch(receiveCurrentUser(user))
  );

export const signup = (user) => (dispatch) =>
  UserApiUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)));

export const deleteUser = (userId) => (dispatch) =>
  UserApiUtil.deleteUser(userId).then(() => dispatch(removeUser(userId)));
