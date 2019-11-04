import React from 'react';


class Cart extends React.Component {
    render() {
        return (
            <div>
                <h1> Your Cart </h1>
            <ul className="list-group">
                {
                    this.props.cart.map(product => {
                        return<li key={product.id} className="list-group-item"> {product.name} {product.price}</li>
                    })
                }
                <li className="list-group-item">Total</li>
  
            </ul>
        </div>
        );
    }
}


export default Cart;