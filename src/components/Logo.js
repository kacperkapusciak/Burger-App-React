import React from 'react';
import styled from 'styled-components';
import burgerLogo from '../assets/img/burger-logo.png';

const LogoWrapper = styled.div`
  background-color: white;
  padding: 8px;
  height: 80%;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Img = styled.img`
  height: 100%;
`;

const logo = props => (
  <LogoWrapper>
    <Img src={burgerLogo} alt="Logo"/>
  </LogoWrapper>
);

export default logo;