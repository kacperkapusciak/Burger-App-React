import styled from 'styled-components';

export const Item = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  width: 100%;
  display: block;
  
  @media (min-width: 500px) {
    margin: 0;
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  color: ${props => props.active ? "#40a4c8" : "#8f5c2c"};

  &:hover, &:active {
    color: #40a4c8;
  }

  @media (min-width: 500px) {
    color: white;
    height: 100%;
    padding: 16px 10px;
    border-bottom-width: 4px;
    border-bottom-style: solid; 
    background-color: ${props => props.active ? "#8f5c2c" : "transparent"};
    border-bottom-color: ${props => props.active ? "#40a4c8" : "transparent"};
  
    &:hover, &:active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
    }
  }
`;

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-content: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;