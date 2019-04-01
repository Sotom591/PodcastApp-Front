import React from 'react'

class Podcast extends React.Component {
  render(){
    console.log(this.props)
    return(
      <div>
      Podcast
        {this.props.podcast ?
          this.props.podcast.title : null
        }
      </div>
    )
  }
}

export default Podcast
