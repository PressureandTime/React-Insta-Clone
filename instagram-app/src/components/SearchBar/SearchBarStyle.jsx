import React from "react";
import styled, { css } from "styled-components";


export const Button = styled.button`
  border: none;
  color: white;
  padding: 10px;
  min-width: 50px;
  font-size: 16px;
  background-color: purple;
  border-radius:10px;

  &:hover {
    opacity: 0.7;
  }

`;


export const SearchBarContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border: 2px solid gainsboro;
  border-radius: 10px;
`;

export const Bar1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22%;
`;

export const Bar2 = styled.div`
  display: flex;
  align-items: center;
  width: 30%;

`;

export const Bar3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Bar3Icons = styled.div`
  display: flex;
  justify-content: space-between;

  i {
    padding: 10px;
  }
`;



