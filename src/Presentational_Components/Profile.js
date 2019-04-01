import React from 'react'
import { connect } from 'react-redux'
import { fetchPodcastInfo } from '../Redux/actions'
import { NavLink } from 'react-router-dom'

class Profile extends React.Component {
  componentDidMount(){
    // IF the user isn't null and has podcasts THEN for each of those podcasts, fetch its data from ListenNotes API //
    if(this.props.user.podcasts){
      this.props.user.podcasts.forEach( podcast => {
        this.props.fetchPodcastInfo(podcast.podcast_id)
      })
    }
  }

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

export default connect(mapStateToProps, { fetchPodcastInfo })(Profile)
