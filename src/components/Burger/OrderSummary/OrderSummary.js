import React from 'react';
import Auxy from '../../../hoc/Auxy';

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxy>
      <h3>Your Order</h3>
      <p>A delicous burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout</p>
    </Auxy>
  );
}

export default OrderSummary;
