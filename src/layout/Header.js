import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { Image, Icon, Switch } from '../components/core';
import { BlurBackground, Search } from '../components/commons';
import { useTheme } from '../hooks';

const Container = styled.div`
  height: 4rem;
  z-index: 100;
`;

const Wrapper = styled.header`
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  z-index: 1;

  a {
    color: inherit;
  }
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ListMenuWrapper = styled.ul`
  display: flex;

  > li {
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
  }

  > li:nth-child(1) {
    padding: 0 0.75rem 0 0;
  }

  .__link {
    display: flex;
    align-items: center;
    font-weight: 400;

    &:hover,
    &.--hover,
    &.--active {
      color: ${props => props.theme.colors['primary-500']};
    }
  }
`;

const Header = (props) => {
  const { actions, isDark } = useTheme();
  const history = useHistory();
  const onSearchClick = useCallback((text) => {
    history.push(`/search?q=${text}`);
  }, [history]);

  const onThemeSwitchChange = useCallback((e) => {
    if (e.target.checked) {
      return actions.changeToDark();
    }
    return actions.changeToLight();
  }, [actions.changeToDark, actions.changeToLight]);

  return (
    <Container {...props}>
      <Wrapper>
        {isDark && <BlurBackground />}
        <SmallWrapper className="container mx-auto">
          <ListMenuWrapper>
            <li>
              <Link to="/" className="__link">
                NHẠC ONLINE
              </Link>
            </li>
            <li>
              <Link to="/" className="__link">
                NHẠC CỦA TÔI
              </Link>
            </li>
          </ListMenuWrapper>
          <Search className="pl-3" style={{ width: '15rem', flex: 1 }} onSearchClick={onSearchClick} />
          <Switch
            className="ml-3"
            onChange={onThemeSwitchChange}
            checked={isDark}
            trueable={<Icon name="moon-stars" />}
            falseable={<Icon name="sun" />}
          />
        </SmallWrapper>
      </Wrapper>
    </Container>
  );
};

Header.displayName = 'Header';
Header.propTypes = {};
Header.defaultProps = {};

export default Header;
