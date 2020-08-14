import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SongBar from '../../containers/SongBar';
import { useNewSongsPlaylist } from './hooks';
import { _chunk } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const PlaylistWrapper = styled.ul`
  flex-shrink: 1;
  flex-grow: 1;
`;

const NewSongs = ({ className }) => {
  const { playlist, actions } = useNewSongsPlaylist();

  useEffect(() => {
    actions.fetchNewSongs();
  }, []);

  const [first, second, third] = useMemo(() => _chunk(playlist.songs, 5), [playlist.songs]);

  return (
    <Wrapper className={className}>
      <PlaylistWrapper className="flex-1">
        {first && first.map((song, idx) => (
          <li key={song.id}>
            <SongBar hiddenDuration {...song} hiddenActions label={idx + 1} />
          </li>
        ))}
      </PlaylistWrapper>
      <PlaylistWrapper className="flex-1">
        {second && second.map((song, idx) => (
          <li key={song.id}>
            <SongBar hiddenDuration {...song} hiddenActions label={idx + 6} />
          </li>
        ))}
      </PlaylistWrapper>
      <PlaylistWrapper className="flex-1">
        {third && third.map((song, idx) => (
          <li key={song.id}>
            <SongBar hiddenDuration {...song} hiddenActions label={idx + 11} />
          </li>
        ))}
      </PlaylistWrapper>
    </Wrapper>
  );
};

NewSongs.displayName = 'NewSongs';
NewSongs.propTypes = {
  className: PropTypes.string,
};
NewSongs.defaultProps = {};

export default NewSongs;
