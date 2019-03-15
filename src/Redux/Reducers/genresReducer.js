const genresReducer = (state = [], action) =>{
  switch (action.type) {
    case "GENRE":
      let genres = [...state]
      action.genres.forEach(genre =>{
        if (genre['parent_id'] === 67){
          genres.push(genre)
        }
      })
      return genres
    default:
      return state
  }
}

export default genresReducer
