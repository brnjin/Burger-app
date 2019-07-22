import React from 'react';
import Auxillary from '../../../../hoc/Auxillary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });

    return (
        <Auxillary>
            <h3> Your Order</h3>
            <p>A delicious burger</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Auxillary>
    )
    
};

export default orderSummary;