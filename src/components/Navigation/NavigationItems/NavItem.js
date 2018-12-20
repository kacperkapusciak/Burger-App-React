import React from 'react';
import {Item, Link} from '../../../styled/Navigation/NavStyling';

const navItem = props => (
  <Item>
    <Link href={props.link} active={props.active}>{props.children}</Link>
  </Item>
);

export default navItem;