import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/actions'

class Profile extends React.Component {

  logout = () => {
    this.props.fetchUser(null);
    localStorage.clear()
  }

  render(){
    return(
      <div>
        Profile
        <button onClick={this.logout}>
          Logout
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchUser })(Profile)
