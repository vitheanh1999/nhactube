import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from './Image';
import Icon from './Icon';

const Wrapper = styled.div`
  position: relative;
  color: #fff;

  &:hover {
    .__play-button {
      opacity: 1;
    }
  }
`;

const Avatar = styled(Image)`
  width: 100%;
  height: 100%;
`;

const PlayButton = styled(Icon)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.3s;
`;

const AvatarWithPlayButton = ({ className, sizeButton, onPlayButtonClick, isAcitve, isPlaying, ...otherProps }) => {
  return (
    <Wrapper className={className}>
      <Avatar {...otherProps} />
      <PlayButton name={isPlaying ? 'pause' : 'play'} size={sizeButton} onClick={onPlayButtonClick} className="__play-button" />
    </Wrapper>
  );
};

AvatarWithPlayButton.displayName = 'AvatarWithPlayButton';
AvatarWithPlayButton.propTypes = {
  className: PropTypes.string,
  isAcitve: PropTypes.bool,
  isPlaying: PropTypes.bool,
  sizeButton: PropTypes.string,
  onPlayButtonClick: PropTypes.func,
};
AvatarWithPlayButton.defaultProps = {
  sizeButton: '5xl',
  onPlayButtonClick: f => f,
};

export default AvatarWithPlayButton;
