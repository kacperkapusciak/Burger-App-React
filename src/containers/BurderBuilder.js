import React, {Component} from 'react';
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Burger/OrderSummary';
import axios from '../axios-orders';
import Spinner from '../components/UI/Spinner';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.3,
  meat: 1.4
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({purchasable: sum > 0});
  }

  //this can be written waaay shorter but i want it explicit.. for now
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ 
      ingredients: updatedIngredients, 
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ 
      ingredients: updatedIngredients, 
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    //alert('What am I supposed to do with this?') now i know what i have to do :)
    this.setState({loading: true});

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Kacper K',
        adress: {
          street: 'Somestreet 11',
          zipCode: '12-345',
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
      })
      .catch(error => {
        this.setState({loading: false, purchasing: false});
      });
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = <OrderSummary 
                          ingredients={this.state.ingredients}
                          price={this.state.totalPrice}
                          cancelled={this.purchaseCancelHandler}
                          accepted={this.purchaseContinueHandler}/>;
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice} />
      </>
    );
  }
}

export default BurgerBuilder;