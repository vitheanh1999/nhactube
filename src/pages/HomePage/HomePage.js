import React from 'react';
import styled from 'styled-components';

import ShelfRenderer from './ShelfRenderer';
import ChartMusic from '../../containers/ChartMusic';
import NewSongs from '../../containers/NewSongs';
import PlaylistSuggest from '../../containers/PlaylistSuggest';
import TopicMusic from '../../containers/TopicMusic';
import ArtistMusicCollection from '../../containers/ArtistMusicCollection';
import MassiveHeaderCarousel from '../../containers/MassiveHeaderCarousel';

const Wrapper = styled.div``;

const HomePage = () => {
  return (
    <Wrapper className="container mx-auto flex flex-col flex-wrap">
      <MassiveHeaderCarousel className="mb-10" style={{ height: '26rem' }} />
      <ShelfRenderer title="BẢNG XẾP HẠNG" wrapperClassName="mb-5">
        <ChartMusic />
      </ShelfRenderer>
      <ShelfRenderer title="CHỦ ĐỀ HOT" wrapperClassName="mt-5">
        <TopicMusic />
      </ShelfRenderer>
      <ShelfRenderer title="BÀI HÁT MỚI" wrapperClassName="mt-5">
        <NewSongs />
      </ShelfRenderer>
      <ShelfRenderer title="CÓ THỂ BẠN MUỐN NGHE" wrapperClassName="mt-5">
        <PlaylistSuggest />
      </ShelfRenderer>
      <ShelfRenderer title="BÀI HÁT THEO CA SĨ" wrapperClassName="mt-5">
        <ArtistMusicCollection />
      </ShelfRenderer>
    </Wrapper>
  );
};

HomePage.displayName = 'HomePage';
HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
