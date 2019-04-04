const podcastsReducer = ( state = [], action ) => {
  switch (action.type) {
    case "FETCH_PODCAST":
      return [...state, action.podcast]
    default:
      return state
  }
}

export default podcastsReducer
