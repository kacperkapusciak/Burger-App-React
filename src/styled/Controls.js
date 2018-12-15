import styled from 'styled-components';

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 20px; 
  margin: 5px;
  color: white;
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
  color: black;
`;

export const Less = styled(Control)`  
  cursor: pointer;
  background-color: #d39952;
  border: 1px solid #8f5e1e;
  :hover, :active {
    background-color: #DAA972;
  }
`;

export const More = styled(Control)`
  cursor: pointer; 
  background-color: #8f5e1e;
  border: 1px solid #8f5e1e;
  :hover, :active {
    background-color: #99703F;
  }  
`;

