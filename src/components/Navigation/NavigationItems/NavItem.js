import React from 'react';
import { NavLink } from 'react-router-dom';
import { Item } from '../../../styled/Navigation/NavStyling';
import styled from 'styled-components';

const navItem = props => (
  <Item>
    <StyledNavLink 
      to={props.link} 
      exact={props.exact}
      activeClassName={"active"}>{props.children}</StyledNavLink>
  </Item>
);

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  color: ${props => props.active ? "#40a4c8" : "#8f5c2c"};

  &:hover, &:active, &.active {
    /*color: #40a4c8;*/
    color: white;
  }

  @media (min-width: 500px) {
    color: white;
    height: 100%;
    padding: 16px 10px;
    border-bottom-width: 4px;
    border-bottom-style: solid; 
    background-color: ${props => props.active ? "#8f5c2c" : "transparent"};
    border-bottom-color: ${props => props.active ? "#40a4c8" : "transparent"};
  
    &:hover, &:active, &.active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
    }
  }
`;

export default navItem;