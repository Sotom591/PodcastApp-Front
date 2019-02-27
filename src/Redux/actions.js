const GENRES_URL = 'https://listennotes.p.rapidapi.com/api/v1/genres'

const RAILS_URL = 'http://localhost:3000'

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
