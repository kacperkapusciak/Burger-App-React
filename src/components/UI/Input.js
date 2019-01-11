import React from 'react';
import styled from 'styled-components';

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case ('input'):
      inputElement = <Input 
          {...props.elementConfig} 
          value={props.value}
          invalid={props.invalid && props.touched}
          onChange={props.changed}/>;
      break;
    case ('textarea'):
      inputElement = <Textarea 
          {...props.elementConfig} 
          value={props.value}
          invalid={props.invalid && props.touched}
          onChange={props.changed}/>;
      break;
    case ('select'):
      inputElement = (
      <Select 
          value={props.value} 
          onChange={props.changed}>
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </Select>
      );
      break;
    default: 
      inputElement = <Input 
          {...props.elementConfig} 
          value={props.value}
          invalid={props.invalid && props.touched}
          onChange={props.changed}/>;
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
//TODO: figure out how to do it by one styled component
const Input = styled.input`
  outline: none;
  border: ${props => props.invalid ? "1px solid red" : "1px solid #ccc"};
  background-color: ${props => props.invalid ? "#fda49a" : "white"};
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
  border: ${props => props.invalid ? "1px solid red" : "1px solid #ccc"};
  background-color: ${props => props.invalid ? "#fda49a" : "white"};
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

const Select = styled.select`
  outline: none;
  border: ${props => props.invalid ? "1px solid red" : "1px solid #ccc"};
  background-color: ${props => props.invalid ? "#fda49a" : "white"};
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