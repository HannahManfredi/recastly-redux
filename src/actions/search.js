import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) => {
    let optionsObj = {
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5
    };

    var cb = function(data) {

      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    };

    searchYouTube(optionsObj, cb);

  };
};

export default handleVideoSearch;
