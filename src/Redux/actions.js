var unirest = require('unirest');
const API_KEY = process.env.REACT_APP_LISTENNOTES_API_KEY

const GENRES_URL = 'https://listennotes.p.rapidapi.com/api/v1/genres'

const RAILS_URL = 'http://localhost:3000/api/v1'

const setGenre = (genres) =>{
  return {type: "GENRE", genres}
}

//this action uses the results from the ListenNotes API fetch call to create Genres for our own backend API (localhost:3000)

// const creatingGenres = (item) =>{
//   let genre = {
//     "name": item.name,
//     "category_id": item.id,
//     "parent_id": item.parent_id
//   }
//   return (dispatch) =>{
//     fetch('http://localhost:3000/api/v1/genres', {
//       method: 'POST',
//       headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(genre)
//     })
//     .then(response => response.json())
//     .then(data => {
//       dispatch(setGenre(data))
//     })
//   }
// }

export const fetchingGenres = () =>{
  return (dispatch) =>{
    fetch(`${RAILS_URL}/genres`)
    .then(response => response.json())
    .then(data => dispatch(setGenre(data)))
  };
}

/* USER ACTIONS */
const fetchUser = (user) => {
  return { type: "FETCH_USER", user}
}

/* existing user login */
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

//checks token thruout app so user persists//

export const checkToken = (token) => {
  return (dispatch) => {
    fetch(`${RAILS_URL}/api/v1/home`, {
    method: "GET",
    headers: {
      "Authentication": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(`You're logged in as ${data.user.username}`)
      dispatch(fetchUser(data.user))
    })
  }
}

// new user sign up //

export const signUpUser = (user) => {
  return (dispatch) => {
    fetch(`${RAILS_URL}/api/v1/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user })
    }).then(r => r.json())
    .then(data => {
      if(data.error){
        alert(`Either username is already taken or password does not meet requirements. Enter a valid username and/or password.`)
      } else {
          console.log("success!", data)
          dispatch(fetchUser(data.user_info))
          localStorage.setItem('token', data.token)
          alert(`New User Created!`)
      }
    })};
}
