import React from 'react'
import Episode from '../Presentational_Components/Episode'
import { connect } from 'react-redux'
import { fetchingEpisode } from '../Redux/actions'
import NavBar from '../Presentational_Components/NavBar'

class EpisodePage extends React.Component {

  render(){
    return(
      <div>
        <NavBar />
        EpisodePage
        <Episode />
      </div>
    )
  }
}

export default EpisodePage
