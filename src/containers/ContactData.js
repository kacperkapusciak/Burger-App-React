import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styled/UI/Button';
import axios from '../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipcode: ''
    },
    loading: false
  }
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Kacper K',
        adress: {
          street: 'Somestreet 11',
          zipCode: '12-345',
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
      })
      .catch(error => {
        this.setState({loading: false});
      });
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