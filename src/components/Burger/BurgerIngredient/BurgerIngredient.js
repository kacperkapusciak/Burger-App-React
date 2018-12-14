import React from 'react';
import {BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Cheese, Salad, Bacon} from '../../../styled/Ingredients';

const BurgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case ('bread-bottom'): 
      ingredient = <BreadBottom/>;
      break;
    case ('bread-top'):
      ingredient = (
        <BreadTop>
          <Seeds1/>
          <Seeds2/>
        </BreadTop>
      )
      break;
    case ('meat'):
      ingredient = <Meat/>;
      break;
    case ('cheese'):
      ingredient = <Cheese/>;
      break;
    case ('salad'):
      ingredient = <Salad/>;
      break;
    case ('bacon'):
      ingredient = <Bacon/>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default BurgerIngredient;