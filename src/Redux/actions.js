var unirest = require('unirest');
const API_KEY = process.env.REACT_APP_LISTENNOTES_API_KEY

const GENRES_URL = 'https://listennotes.p.rapidapi.com/api/v1/genres'

const LISTENNOTES_URL = 'https://listennotes.p.rapidapi.com/api/v1/'

const RAILS_URL = 'http://localhost:3001/api/v1'

const setGenre = (genres) =>{
  return {type: "GENRE", genres}
}

// TEST FETCH TO LISTENNOTES API //
export const fetchPodcastInfo = (podcastID) => {
  return (dispatch, getStore) => {
    unirest.get(LISTENNOTES_URL + `podcasts/${podcastID}?sort=recent_first`)
    .header("X-RapidAPI-Key", API_KEY)
    .end(function (result) {
      console.log(result.body);

      // find the right podcast and then update it with the ListenNotes info about it //
      let user = getStore().user
      let podcasts = user.podcasts.map( podcast => {
        if(podcast.podcast_id === result.body.id){
          return {
            ...podcast,
            description: result.body.description,
            episodes: result.body.episodes,
            explicit_content: result.body.explicit_content,
            extra: result.body.extra,
            genres: result.body.genres,
            image: result.body.image,
            thumbnail: result.body.thumbnail,
            title: result.body.title,
            total_episodes: result.body.total_episodes,
            website: result.body.website
          }
        }
        else {
          return podcast
        }
      })
      //create new user so React/Redux can see state has changed //
      user.podcasts = podcasts
      let newUser = {...user}
      dispatch(fetchUser(newUser))
    });
  }
}

export const fetchRecommendedPodcasts = () => {
  return (dispatch, getStore) => {
    let user = getStore().user
    let podcasts = user.podcasts
    // below function will spit out a random number so we can choose a random podcast //
    let randomIndex = Math.floor(Math.random() * podcasts.length)
    let randomPodcast = podcasts[randomIndex]
    let podcastID = randomPodcast.podcast_id

    unirest.get(LISTENNOTES_URL + `podcasts/${podcastID}/recommendations`)
    .header("X-RapidAPI-Key", API_KEY)
    .end(function (result) {
      console.log(result.body);

      //Figure out what to do with recommended list of podcasts //


    });
  }
}

/////////// END OF MIKE'S MAD TESTING //////////////////////////////////

//this action uses the results from the ListenNotes API fetch call to create Genres for our own backend API (localhost:3001)

// const creatingGenres = (item) =>{
//   let genre = {
//     "name": item.name,
//     "category_id": item.id,
//     "parent_id": item.parent_id
//   }
//   return (dispatch) =>{
//     fetch(LISTENNOTES_URL + 'genres', {
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
export const fetchUser = (user) => {
  return { type: "FETCH_USER", user}
}

/* existing user login */
export const fetchingUser = (user) => {
  return (dispatch) => {
    fetch(`${RAILS_URL}/login`, {
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
// changed the returned JSON object to just be the UserSerializer object //
export const checkToken = (token) => {
  return (dispatch) => {
    fetch(`${RAILS_URL}/home`, {
    method: "GET",
    headers: {
      "Authentication": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(user => {
      console.log(user)
      dispatch(fetchUser(user))
    })
  }
}

// new user sign up //

export const signUpUser = (user) => {
  return (dispatch) => {
    fetch(`${RAILS_URL}/new`, {
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
