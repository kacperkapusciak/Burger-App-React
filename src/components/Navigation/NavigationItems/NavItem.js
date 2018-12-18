import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  height: 100%;
  padding: 16px 10px;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  box-sizing: border-box;
  display: block;
  background-color: ${props => props.active ? "#8f5c2c" : "transparent"};
  border-bottom-color: ${props => props.active ? "#40a4c8" : "transparent"};

  &:hover, &:active {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
  }
`;

const navItem = props => (
  <Item>
    <Link href={props.link} active={props.active}>{props.children}</Link>
  </Item>
);

export default navItem;