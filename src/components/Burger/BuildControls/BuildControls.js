import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl';
import OrderButton from '../../../styled/Burger/BuildControls/OrderButton';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]

const buildControls = props => (
  <ControlsArea>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
        ))}
      <OrderButton 
        disabled={!props.purchasable}
        onClick={props.ordered}>{props.isAuth ? "ORDER NOW" : "SIGN IN TO ORDER"}</OrderButton>
  </ControlsArea>
);

const ControlsArea = styled.section`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

export default buildControls;
