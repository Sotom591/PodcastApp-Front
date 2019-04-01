import React from 'react'

class Podcast extends React.Component {
  showPodcast = () => {
    if(this.props.podcast){
      return(
        <div>
          <img src={this.props.podcast.image} alt={this.props.podcast.title} />
          <h2> {this.props.podcast.title} </h2>
          {this.props.podcast.genres ?
          <ul>
          Genres:
          {this.props.podcast.genres.map( genre => (
            <li> {genre} </li>
          ))}
          </ul>
          : null
          }
          <div> {this.props.podcast.description} </div>
          {this.props.podcast.episodes ?
          <ul>
            Most Recent Episodes:
            {this.props.podcast.episodes.map( episode => (
              <li> {episode} </li>
            ))}
          </ul>
          : null
        }
        </div>
      )
    }
  }
  //Need to get rid of thhe conditionals in genres and episodes => reorganize how props being passed down //

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
