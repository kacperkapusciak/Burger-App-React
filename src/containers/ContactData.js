import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styled/UI/Button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipcode: ''
    }
  }
  orderHandler = () => {

  }
  render() {
    return(
      <Wrapper>
        <h4>Enter your Contact Data</h4>
        <form>
          <Input type="text"  name="name" placeholder="Your Name" />
          <Input type="email"  name="email" placeholder="Your Mail" />
          <Input type="text"  name="street" placeholder="Street" />
          <Input type="text"  name="zipcode" placeholder="Postal code" />
          <Button success onClick={this.orderHandler}>ORDER</Button>
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  @media (min-width: 600px) {
    width: 500px;
  }
`;
const Input = styled.input`
  display: block;
`;
export default ContactData;