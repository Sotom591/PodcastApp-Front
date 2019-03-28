import React from 'react'
import Podcast from '../Presentational_Components/Podcast'

const PodcastPage = (props) => {
  return(
    <div>
      PodcastPage
      <Podcast podcast={props.podcast} key={props.podcast.podcast_id} />
    </div>
  )
}

export default PodcastPage
