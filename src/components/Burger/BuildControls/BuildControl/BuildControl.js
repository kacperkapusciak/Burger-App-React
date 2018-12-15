import React from 'react';
import {Control, Label, Less, More} from '../../../../styled/Control';
const buildControl = props => (
  <Control>
    <Label>{props.label}</Label>
    <Less>-</Less>
    <More>+</More>
  </Control>
);

export default buildControl;