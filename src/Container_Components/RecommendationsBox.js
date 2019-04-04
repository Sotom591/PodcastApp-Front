import React from 'react'
import Recommendations from '../Presentational_Components/Recommendations'
import { connect } from 'react-redux'
import { fetchRecommendedPodcasts } from '../Redux/actions'

class RecommendationsBox extends React.Component {

  componentDidMount(){
    this.props.fetchRecommendedPodcasts()
  }

  render(){
    return(
      <div>
        Recommendations Box
        <Recommendations />
      </div>
    )
  }
}

export default connect(null, { fetchRecommendedPodcasts })(RecommendationsBox)
