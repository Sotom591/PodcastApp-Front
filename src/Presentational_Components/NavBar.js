import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/actions'


class NavBar extends React.Component {
  logout = () => {
    this.props.fetchUser(null);
    localStorage.clear()
  }

  render(){
    return(
      <div
        style={{
          border: '1px solid black'
        }}
        >
        NavBar
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

export default connect(mapStateToProps, { fetchUser })(NavBar)
