import React from 'react';
import Wrapper from '../../styled/BurgerWrapper';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = props => {
  return (
    <Wrapper>
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="bread-bottom"/>
    </Wrapper>
  );
};

export default burger;