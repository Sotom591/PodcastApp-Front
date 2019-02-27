import React, { Component } from 'react';
import './App.css';
import Home from './presentationalComponents/Home.js'
import {Switch} from 'react-router-dom'

//for api key use
//API_KEY = process.env.REACT_APP_LISTENNOTES_API_KEY

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/home' component={ Home } />
          <Route exact path='/sign_up' component={ Signup } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/profile/:username' component={ ProfilePage } />
          <Route exact path='/profile/:username/:edit' component={ EditProfilePage } />
          <Route exact path='/podcast/:id' component={ PodcastPage } />
          <Route exact path='/podcast/:id/:episode_id' component={ EpisodePage } />
          <Route exact path='/browse' component={Browse} />
          <Route exact path='/genres/:id' component={ GenrePage } />
          <Route exact path='/search/?query=' component={ SearchResultPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
