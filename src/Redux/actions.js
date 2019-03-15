var unirest = require('unirest');
const API_KEY = process.env.REACT_APP_LISTENNOTES_API_KEY

const GENRES_URL = 'https://listennotes.p.rapidapi.com/api/v1/genres'

const RAILS_URL = 'http://localhost:3000/api/v1'

const setGenre = (genre) =>{
  return {type: "GENRE", genre}
}

//this action uses the results from the ListenNotes API fetch call to create Genres for our own backend API (localhost:3000)

const creatingGenres = (item) =>{
  let genre = {
    "name": item.name,
    "category_id": item.id,
    "parent_id": item.parent_id
  }
  return (dispatch) =>{
    fetch('http://localhost:3000/api/v1/genres', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(genre)
    })
    .then(response => response.json())
    .then(data => {
      dispatch(setGenre(data))
    })
  }
}

const fetchingGenres = () =>{
  return (dispatch) =>{
    unirest.get(GENRES_URL)
    .header("X-RapidAPI-Key", API_KEY)
    .end((result) => result.body.genres.forEach(genre => dispatch(creatingGenres(genre)))
  )};
}

export {fetchingGenres}
