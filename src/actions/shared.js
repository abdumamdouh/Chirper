import { getInitialData } from "../utils/api";

import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

//thunk action creator //makes async req then dispatch/add the data to the store
// dispatching the initial Data in the thunk action creator
// this function must be dispatched when the main component mounts to get the initial data then store it in the app level state in the store

export default function handleInitialData() {
  return function (dispatch) {
    getInitialData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
