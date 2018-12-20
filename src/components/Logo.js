import React from 'react';
import styled from 'styled-components';
import burgerLogo from '../assets/img/burger-logo.png';

const LogoWrapper = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Img = styled.img`
  height: 100%;
`;

const logo = props => (
  <LogoWrapper style={{
          height: props.height, 
          marginBottom: props.marginBottom}}>
    <Img src={burgerLogo} alt="Logo"/>
  </LogoWrapper>
);

export default logo;