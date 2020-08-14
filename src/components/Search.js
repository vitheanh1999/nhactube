import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../components/Input';
import Icon from '../components/Icon';
import Button from '../components/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputStyled = styled(Input)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
`;

const Search = ({ onSearchClick, ...otherProps }) => {
  const inputRef = useRef();
  const onClick = useCallback(() => {
    onSearchClick(inputRef.current.value);
  }, [onSearchClick, inputRef]);

  return (
   <Wrapper {...otherProps}>
      <Button onClick={onClick} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
        <Icon name="search" />
      </Button>
      <InputStyled
        ref={inputRef}
        type="search"
        className="flex-1"
        placeholder="Nhập tên bài hát hoặc ca sĩ..."
      />
   </Wrapper>
  );
};

Search.displayName = 'Search';
Search.propTypes = {
  onSearchClick: PropTypes.func,
};
Search.defaultProps = {
  onSearchClick: f => f,
};

export default Search;
