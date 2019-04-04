import React from 'react'
import Podcast from '../Presentational_Components/Podcast'
import { connect } from 'react-redux'
import { fetchingPodcast } from '../Redux/actions'

class PodcastPage extends React.Component {

  // currently working, but might be flawed; find podcast if already fetched and send its info as props or fetch for it again //
  getPodcast = () => {
    let podcast = this.props.podcasts.find(pod => pod.podcast_id === this.props.match.params.id )
    if(podcast){
      return <Podcast podcast={podcast} />
    }
    else {
      let podcastID = this.props.match.params.id
      this.props.fetchingPodcast(podcastID)
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
    podcasts: state.podcasts
  }
}

export default connect(mapStateToProps, { fetchingPodcast })(PodcastPage)
