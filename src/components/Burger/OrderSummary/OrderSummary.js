import React from 'react';
import Auxy from '../../../hoc/Auxy/Auxy';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {

  componentWillUpdate() {

  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Auxy>
        <h3>Your Order</h3>
        <p>A delicous burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)} </strong>
        </p>
        <p>Continue to Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinueed}>
          CONTINUE
        </Button>
      </Auxy>
    );
  }
}

export default OrderSummary;
