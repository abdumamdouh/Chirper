// (previousState, action) => newState pure function, must return a new object
import { SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(prevState = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.payload;

    default:
      return prevState;
  }
}
