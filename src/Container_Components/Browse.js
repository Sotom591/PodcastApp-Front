import React from 'react';
import {fetchingGenres} from '../Redux/actions';
import { connect } from 'react-redux';

class Browse extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchingGenres())
  }

  render(){
    return(
      <div>
        Browse
        <h1>Genres</h1>
        <div>
          {this.props.genres.map(genre => (
            <h2>{genre.name}</h2>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres
  }
}

export default connect(mapStateToProps)(Browse)
