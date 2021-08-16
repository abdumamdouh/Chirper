// set authed user action creator with authed user id data as a payload
export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    payload: id,
  };
}
