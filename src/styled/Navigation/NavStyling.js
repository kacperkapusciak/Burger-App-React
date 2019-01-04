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

export const Drawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out; 
  transform: translateX(${props => props.open ? "0" : "-100%" });

  @media (min-width: 500px) {
    display: none;
  }
`;