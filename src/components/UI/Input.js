import React from 'react';
import styled from 'styled-components';

const input = props => {
  let inputElement = null;
  switch (props.elementType) {
    case ('input'):
      inputElement = <Input {...props.elementConfig} value={props.value}/>;
      break;
    case ('textarea'):
      inputElement = <Textarea {...props.elementConfig} value={props.value}/>;
      break;
    default: 
      inputElement = <Input {...props.elementConfig} value={props.value}/>;
  }
  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      {inputElement}
    </InputWrapper>
  );

}

const InputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  :focus {
    background-color: #ccc;
    outline: none;
  }
`;
const Textarea = styled.textarea`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  :focus {
    background-color: #ccc;
    outline: none;
  }
`;
export default input;