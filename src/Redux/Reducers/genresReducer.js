const genresReducer = (state = [], action) =>{
  switch (action.type) {
    case "GENRES":
      return action.genres
    default:
      return state
  }
}

export default genresReducer
