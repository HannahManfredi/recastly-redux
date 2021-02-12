import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

const mapDispatchToProps = (dispatch) => {
  return {
    getYouTubeVideos: (q) => dispatch(handleVideoSearch(q))
  };
};

var SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;

