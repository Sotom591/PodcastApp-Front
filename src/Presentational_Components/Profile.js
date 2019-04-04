import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import RecommendationsBox from '../Container_Components/RecommendationsBox'

class Profile extends React.Component {

  render(){
    return(
      <div>
        Profile
        {this.props.user.podcasts ?
        <div>
          {this.props.user.podcasts.map( (podcast, index) => (
            <li key={index}>
            <NavLink to={`/podcast/${podcast.podcast_id}`} key={podcast.id}>
              {podcast.title}
            </NavLink>
            </li>
          ))}
        </div>
        : null
        }

        <RecommendationsBox />
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
