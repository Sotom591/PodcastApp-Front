import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/actions'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

class NavBar extends React.Component {
  logout = () => {
    this.props.fetchUser(null);
    localStorage.clear()
  }

  render(){
    return(
      <div>
        <AppBar position='static'>
          <Toolbar>

          <NavLink exact to='/home'> Home </NavLink>
        <Button onClick={this.logout}>
          Logout
        </Button>
        <Avatar src={this.props.user.avatar}/>
        <Typography>
          {this.props.user.username}
        </Typography>
      </Toolbar>
      </AppBar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchUser })(NavBar)
