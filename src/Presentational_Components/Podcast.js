import React from 'react'

class Podcast extends React.Component {
  showPodcast = () => {
    if(this.props.podcast){
      return(
        <div>
          <img src={this.props.podcast.image} alt={this.props.podcast.title} />
          <h2> {this.props.podcast.title} </h2>
          <ul>
          Genres:
          {this.props.podcast.genres.map( genre => (
            <li key={genre}> {genre} </li>
          ))}
          </ul>

          <div> {this.props.podcast.description} </div>
          <ul>
            Most Recent Episodes:
            {this.props.podcast.episodes.map( episode => (
              <li key={episode.title}> {episode.title} </li>
            ))}
          </ul>

        </div>
      )
    }
  }

  render(){
    return(
      <div>
      Podcast
        {this.props.podcast ?
          this.showPodcast() : null
        }
      </div>
    )
  }
}

export default Podcast
