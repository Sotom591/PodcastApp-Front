GENRES_URL = 'https://listennotes.p.rapidapi.com/api/v1/genres'

const fetchGenres = (genres) =>{
  return {type: "GENRES", genres}
}

const fetchingGenres = () =>{
  return (dispatch) =>{
    fetch(GENRES_URL)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchGenres(data))
      })
  }
}

export {fetchingGenres}
