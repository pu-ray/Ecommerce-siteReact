import React from 'react';
import Product from './Product';


class Catalogue extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Catalogue</h1>
                <div className="row">
                    {
                        this.props.products.map(product => {
                            return <Product key={product.id} product={product} addToCart = {this.props.addToCart}/>
                        })
                    }
                </div>
            </div>
        );
    }
}


export default Catalogue;