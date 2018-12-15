import React from 'react';
import Wrapper from '../../styled/BurgerWrapper';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = props => {

  const ingredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map( (_,i) => {
        return <BurgerIngredient key={igKey + i} type={igKey}/>;
      });
    });

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