// (previousState, action) => newState pure function, must return a new object
import { RECEIVE_USERS } from "../actions/users";

export default function users(prevState = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...prevState,
        ...action.payload,
      };

    default:
      return prevState;
  }
}
