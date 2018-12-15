import React from 'react';
import ControlsArea from '../../../styled/ControlsArea';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]

const buildControls = props => (
  <ControlsArea>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)} />
    ))}
  </ControlsArea>
);

export default buildControls;