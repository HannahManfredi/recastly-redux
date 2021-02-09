import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //pass searchYouTube an options obj with a key, query, max of 5 and a cb
  return (dispatch) => {
    let optionsObj = {
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5
    };

    var cb = function(data) {
      //call dispatch from inside of cb???
      console.log(data);
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    };

    searchYouTube(optionsObj, cb);

  };


};

export default handleVideoSearch;
