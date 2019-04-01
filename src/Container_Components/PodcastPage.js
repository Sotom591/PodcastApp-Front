import React from 'react'
import Podcast from '../Presentational_Components/Podcast'
import { connect } from 'react-redux'

class PodcastPage extends React.Component {

  //this only works if we've already fetched data for each of the user's podcasts from ListenNotes; may need to consider sending another fetch on this page => more expensive performance-wise but makes it so user doesn't have to go to home page first //

  getPodcast = () => {
    if(this.props.user){
      let podcast = this.props.user.podcasts.find(pod => pod.podcast_id === this.props.match.params.id )
      return <Podcast podcast={podcast} />
    }
  }

  render(){
    return(
      <div>
        PodcastPage
        {this.getPodcast()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(PodcastPage)
