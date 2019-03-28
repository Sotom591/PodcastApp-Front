import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render(){
    return(
      <div>
        Profile
        <div>
          {this.props.user.podcasts.map( podcast => (
            <div key={podcast.podcast_id}>
              {podcast.podcast_id}
            </div>
          ))}
        </div>
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
