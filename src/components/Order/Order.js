import React from 'react';
import styled from 'styled-components';

const order = props => {
  <div>
    <p>Ingredients: Salad (1)</p>
    <p>Price: <strong>USD 5.45</strong></p>
  </div>
}

const Styled = styled.div`
  width: 100%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;
export default Styled(order);