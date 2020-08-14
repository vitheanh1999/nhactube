import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const ShelfRendererHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 900;
`;

const RenderPropWrapper = styled.div``;

const RestWrapper = styled.div``;

const ShelfRenderer = ({ className, children, title, wrapperClassName }) => {
  return (
    <Wrapper className={wrapperClassName}>
      <ShelfRendererHeader>
        <Title className="my-5">{title}</Title>
        <RenderPropWrapper>

        </RenderPropWrapper>
      </ShelfRendererHeader>
      <RestWrapper className={className}>
        {children}
      </RestWrapper>
    </Wrapper>
  );
};

ShelfRenderer.displayName = 'ShelfRenderer';
ShelfRenderer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string,
  wrapperClassName: PropTypes.string,
};
ShelfRenderer.defaultProps = {};

export default ShelfRenderer;
