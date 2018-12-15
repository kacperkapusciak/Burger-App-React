import React from 'react';
import {Control, Label, Less, More} from '../../../../styled/Controls';

const buildControl = props => (
  <Control>
    <Label>{props.label}</Label>
    <Less 
      onClick={props.removed} 
      disabled={props.disabled}>Less</Less>
    <More 
      onClick={props.added}>More</More>
  </Control>
);

export default buildControl;