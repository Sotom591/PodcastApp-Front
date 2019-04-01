import React from 'react'
import Podcast from '../Presentational_Components/Podcast'
import { connect } from 'react-redux'
import { fetchPodcastInfo } from '../Redux/actions'

class PodcastPage extends React.Component {

  //this only works if we've already fetched data for each of the user's podcasts from ListenNotes; may need to consider sending another fetch on this page => more expensive performance-wise but makes it so user doesn't have to go to home page first //

  // componentDidMount(){
  //   let podcastID = this.props.match.params.id
  //   this.props.fetchPodcastInfo(podcastID)
  // }

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

export default connect(mapStateToProps, { fetchPodcastInfo })(PodcastPage)
