// receive tweets action creator with tweets data as a payload
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    payload: tweets,
  };
}
