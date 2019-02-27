import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Container_Components/Home'
import Browse from './Container_Components/Browse'
import EditProfilePage from './Container_Components/EditProfilePage'
import EpisodePage from './Container_Components/EpisodePage'
import GenrePage from './Container_Components/GenrePage'
import Login from './Container_Components/Home'
import PodcastPage from './Container_Components/PodcastPage'
import ProfilePage from './Container_Components/ProfilePage'
import SearchResultPage from './Container_Components/SearchResultPage'
import Signup from './Container_Components/EpisodePage'

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
