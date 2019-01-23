import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../../styled/UI/Button';
import styled from 'styled-components';

const Styling = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const checkoutSummary = props => {
  return (
    <Styling>
      <h1>We hope it tastes well!</h1>

      <Wrapper>
        <Burger ingredients={props.ingredients}/>
      </Wrapper>

      <Button danger onClick={props.checkoutCancelled}>CANCEL</Button>
      <Button success onClick={props.checkoutContinued}>CONTINUE</Button>

    </Styling>
  );
}

export default checkoutSummary;
