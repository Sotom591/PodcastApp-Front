const genresReducer = (state = [], action) =>{
  switch (action.type) {
    case "GENRE":
      let genres = [...state]
      if (action.genre['parent_id'] === 67){
        genres.push(action.genre)
      }
      return genres
    default:
      return state
  }
}

export default genresReducer
