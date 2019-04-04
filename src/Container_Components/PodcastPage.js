import React from 'react'
import Podcast from '../Presentational_Components/Podcast'
import { connect } from 'react-redux'
var unirest = require('unirest');
const API_KEY = process.env.REACT_APP_LISTENNOTES_API_KEY
const LISTENNOTES_URL = 'https://listennotes.p.rapidapi.com/api/v1/'



class PodcastPage extends React.Component {

  // this only works if podcast is attached to a user but we want to be able to show its info regardless so need to send a fetch here instead //

  state = {
    podcast: null
  }

  componentDidMount() {
    let podcast
    podcast = this.props.podcasts.find(pod => pod.podcast_id === this.props.match.params.id )
    if(podcast){
      this.setState({ podcast: podcast })
    }
    else {
      let podcastID = this.props.match.params.id
      unirest.get(LISTENNOTES_URL + `podcasts/${podcastID}?sort=recent_first`)
        .header("X-RapidAPI-Key", API_KEY)
        .end(function (result) {
          console.log(result.body);

          podcast = {
            podcast_id: result.body.id,
            description: result.body.description,
            episodes: result.body.episodes,
            explicit_content: result.body.explicit_content,
            extra: result.body.extra,
            genres: result.body.genres,
            image: result.body.image,
            thumbnail: result.body.thumbnail,
            title: result.body.title,
            total_episodes: result.body.total_episodes,
            website: result.body.website
          };
      })
      this.setState({ podcast: podcast })
    }
  }

  render(){
    return(
      <div>
        PodcastPage
        <Podcast podcast={this.state.podcast}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    podcasts: state.podcasts
  }
}

export default connect(mapStateToProps)(PodcastPage)
