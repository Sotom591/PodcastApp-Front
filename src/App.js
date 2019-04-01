import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkToken } from './Redux/actions'
import './App.css';
import Home from './Container_Components/Home'
import Browse from './Container_Components/Browse'
import EditProfilePage from './Container_Components/EditProfilePage'
import EpisodePage from './Container_Components/EpisodePage'
import GenrePage from './Container_Components/GenrePage'
import Login from './Container_Components/Login'
import PodcastPage from './Container_Components/PodcastPage'
import ProfilePage from './Container_Components/ProfilePage'
import SearchResultPage from './Container_Components/SearchResultPage'
import SignUp from './Container_Components/SignUp'

//for api key use
// API_KEY = process.env.REACT_APP_LISTENNOTES_API_KEY

class App extends Component {

  componentDidMount(){
    if (localStorage.token){
      this.props.checkToken(localStorage.token)
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/home' render={ () => (
              this.props.user ?
                <Home /> : <Redirect to='/login' />
            )} />
          <Route exact path='/login' render={ () => (
              !this.props.user ?
                <Login /> : <Redirect to='/home' />
            )} />
          <Route exact path='/sign_up' component={ SignUp } />
          <Route exact path='/profile/:username' component={ ProfilePage } />
          <Route exact path='/profile/:username/:edit' component={ EditProfilePage } />
          <Route exact path='/podcast/:id' render={ (routerProps) => (
              <PodcastPage {...routerProps} user={this.props.user} /> 
            )}/>
          <Route exact path='/podcast/:id/:episode_id' component={ EpisodePage } />
          <Route exact path='/browse' component={Browse} />
          <Route exact path='/genres/:id' component={ GenrePage } />
          <Route exact path='/search/?query=' component={ SearchResultPage } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, {checkToken})(App));
