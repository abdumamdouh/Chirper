// receive users action creator with users data as a payload
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: users,
  };
}
