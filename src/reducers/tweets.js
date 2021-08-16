import { RECEIVE_TWEETS } from "../actions/tweets";

// (previousState, action) => newState pure function, must return a new object

export default function tweets(prevState = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...prevState,
        ...action.payload,
      };
    default:
      return prevState;
  }
}
