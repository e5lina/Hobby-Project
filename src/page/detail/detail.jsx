import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header/Header';
import DetailMenu from '../../component/detail/DetailMenu';

const Detail = styled.div``;

function detail() {
  return (
    <>
      <Header />
      <DetailMenu />
      <Detail>안녕하세요</Detail>
    </>
  );
}

export default detail;
