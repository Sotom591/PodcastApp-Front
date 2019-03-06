const genresReducer = (state = [], action) =>{
  switch (action.type) {
    case "FETCH_GENRES":
      return action.genres
    default:
      return state
  }
}

export default genresReducer
