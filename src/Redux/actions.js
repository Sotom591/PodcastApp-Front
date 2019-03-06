var unirest = require('unirest');
const API_KEY = process.env.REACT_APP_LISTENNOTES_API_KEY

const GENRES_URL = 'https://listennotes.p.rapidapi.com/api/v1/genres'

const RAILS_URL = 'http://localhost:3000'

/* GENRE ACTIONS */
const fetchGenres = (genres) =>{
  return {type: "FETCH_GENRES", genres}
}

export const fetchingGenres = () =>{
  return (dispatch) =>{
    unirest.get("https://listennotes.p.rapidapi.com/api/v1/genres")
    .header("X-RapidAPI-Key", API_KEY)
    .end((result) => dispatch(fetchGenres(result.body.genres))
  );
  }
}

/* USER ACTIONS */
const fetchUser = (user) => {
  return { type: "FETCH_USER", user}
}

export const fetchingUser = (user) => {
  return (dispatch) => {
    fetch(`${RAILS_URL}/api/v1/login`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        alert("Incorrect username/password combination")
      } else {
        console.log("Login successful", data)
        dispatch(fetchUser(data.user_info))
        localStorage.setItem('token', data.token)
      }
    })
  }
}
