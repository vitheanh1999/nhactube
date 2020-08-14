import { artistMusicCollectionConstants } from './constants'
const initialState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  isFetched: false,

  playlists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // BXH
    case artistMusicCollectionConstants.GET_ARTIST_MUSIC_COLECTION_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        isSuccess: false,
      };

    case artistMusicCollectionConstants.GET_ARTIST_MUSIC_COLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        isSuccess: false,
      };

    case artistMusicCollectionConstants.GET_ARTIST_MUSIC_COLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        isSuccess: true,
        isFetched: true,
        playlists: action.payload,
      };

    default:
      return state;
  }
};
