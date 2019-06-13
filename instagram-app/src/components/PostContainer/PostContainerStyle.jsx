import React from 'react';
import styled, { css } from 'styled-components';

export const PostContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ThumbNailImg = styled.div`
  display: inline-flex;
  width: 30%;
  justify-content: space-evenly;
  padding: 10px;

  img {
    border-radius: 50px;
    padding: 10px;
  }
`;

export const PostContainerIcons = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 14%;
  padding: 10px;
`;
