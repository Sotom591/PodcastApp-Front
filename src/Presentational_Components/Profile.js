import React from 'react'
import { connect } from 'react-redux'
import { fetchPodcastInfo } from '../Redux/actions'

import PodcastPage from '../Container_Components/PodcastPage'

class Profile extends React.Component {
  componentDidMount(){
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
            <PodcastPage podcast={podcast} key={podcast.podcast_id} />
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
