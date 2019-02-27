var unirest = require('unirest');
const API_KEY = process.env.REACT_APP_LISTENNOTES_API_KEY

const GENRES_URL = 'https://listennotes.p.rapidapi.com/api/v1/genres'

const RAILS_URL = 'http://localhost:3000'

const fetchGenres = (genres) =>{
  return {type: "GENRES", genres}
}

const fetchingGenres = () =>{
  return (dispatch) =>{
    unirest.get("https://listennotes.p.rapidapi.com/api/v1/genres")
    .header("X-RapidAPI-Key", API_KEY)
    .end((result) => dispatch(fetchGenres(result.body.genres))
  );
  }
}

export {fetchingGenres}
