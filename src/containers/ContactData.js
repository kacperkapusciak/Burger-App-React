import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styled/UI/Button';
import Spinner from '../components/UI/Spinner';
import Input from '../components/UI/Input';
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
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
  }
  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text"  name="name" placeholder="Your Name" />
        <Input inputtype="input" type="email"  name="email" placeholder="Your Mail" />
        <Input inputtype="input" type="text"  name="street" placeholder="Street" />
        <Input inputtype="input" type="text"  name="zipcode" placeholder="Postal code" />
        <Button success onClick={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return(
      <Wrapper>
        <h4>Enter your Contact Data</h4>
        {form}
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

export default ContactData;