import React from 'react';
import ControlsArea from '../../../styled/ControlsArea';
import BuildControl from './BuildControl/BuildControl';
import OrderButton from '../../../styled/OrderButton';
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
        onClick={props.ordered}>ORDER NOW</OrderButton>
  </ControlsArea>
);

export default buildControls;