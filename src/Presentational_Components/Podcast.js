import React from 'react'

class Podcast extends React.Component {
  render(){
    return(
      <div>
        {this.props.podcast.title}
      </div>
    )
  }
}

export default Podcast
