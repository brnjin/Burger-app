import React, { Component } from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import Button from '../../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[OrderSummary willUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        });

        return (
            <Auxillary>
                <h3> Your Order</h3>
                <p>A delicious burger</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <strong>Total Price: ${this.props.price}</strong>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Auxillary>
        )
    }
    
    
};

export default OrderSummary;