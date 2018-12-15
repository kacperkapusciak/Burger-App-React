import styled from 'styled-components';

export const ControlsArea = styled.section`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

export const Button = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
  }
  
  &:hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

export const Less = styled(Control)`  
  background-color: #D39952;
  color: white;
  :hover, :active { //may produce errors idk
    background-color: #DAA972;
    color: white;
  }
`;

export const More = styled(Control)`
  background-color: #8F5E1E;
  color: white;
  :hover, :active { //and also here
    background-color: #99703F;
    color: white;
  }  
`;

