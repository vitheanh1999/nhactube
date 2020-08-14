import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Image } from '../components/core';

const Avatar = styled(Image)`
  width: 100%;
  height: 7em;
`;

const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;

  &:hover,
  &.--hover {
    color: ${props => props.theme.colors['primary-400']};
  }
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  white-space: pre-wrap;
  font-weight: 400;
  text-transform: uppercase;
  vertical-align: center;
  text-align: center;
`;

const PlaylistCard = ({ className, avatarUrl, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Avatar className="__avatar" src={avatarUrl} />
    </Wrapper>
  );
};

PlaylistCard.displayName = 'PlaylistCard';
PlaylistCard.propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  onClick: PropTypes.func,
};
PlaylistCard.defaultProps = {
  onClick: f => f,
};

export default PlaylistCard;
