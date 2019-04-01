import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Profile extends React.Component {

  render(){
    return(
      <div>
        Profile
        {this.props.user.podcasts ?
        <div>
          {this.props.user.podcasts.map( podcast => (
            <NavLink to={`/podcast/${podcast.podcast_id}`} key={podcast.id}>
              {podcast.title}
            </NavLink>
          ))}
        </div>
        : null
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
