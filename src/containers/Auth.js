import React, { Component } from 'react';
import Input from '../components/UI/Input';
import Button from '../styled/UI/Button';
import { StyledForm } from './ContactData';

class Auth extends Component {
  
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false,
        errorMessage: "Please enter email" 
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false,
        errorMessage: "Password must be at least 6 characters" 
      }
    }
  }

  checkValidity(value, rules) {
    let isValid = true;
        
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    }
    this.setState({controls: updatedControls});
  }

  render () {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    const form = formElementsArray.map(element => (
      <Input 
        key={element.id}
        elementType={element.config.elementType}
        elementConfig={element.config.elementConfig}
        value={element.config.value}
        invalid={!element.config.valid}
        touched={element.config.touched}
        errorMessage={element.config.errorMessage}
        changed={(event) => this.inputChangedHandler(event, element.id)}/>
    ));

    return (
      <StyledForm>
        <form>
          {form}
          <Button success>SUBMIT</Button>
        </form>
      </StyledForm>
    );
  }
}

export default Auth;
