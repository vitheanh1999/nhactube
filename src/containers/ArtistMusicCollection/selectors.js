import { createSelector } from 'reselect';
import { playlistSelector } from '../../store/selectors';

export const artistMusicCollectionReducerSelector = state => state.artistMusicCollectionReducer;

export const artistMusicCollectionSelector = createSelector(
  artistMusicCollectionReducerSelector,
  (artistMusicCollectionReducer) => artistMusicCollectionReducer
    .playlists
    .map(playlist => playlistSelector(playlist)),
);
