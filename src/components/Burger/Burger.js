import React from 'react';
import Wrapper from '../../styled/BurgerWrapper';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = props => {

  let ingredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map( (_,i) => {
        return <BurgerIngredient key={igKey + i} type={igKey}/>;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

    if (ingredients.length === 0) {
      ingredients = <p>Add some ingredients!</p>
    }
  return (
    <Wrapper>
      <BurgerIngredient type="bread-top"/>
      {ingredients}
      <BurgerIngredient type="bread-bottom"/>
    </Wrapper>
  );
};

export default burger;