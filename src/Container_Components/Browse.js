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
