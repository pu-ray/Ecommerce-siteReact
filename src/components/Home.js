import React from 'react';
import Catalogue from './Catalogue';
import Cart from './Cart';
import { throwStatement } from '@babel/types';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: []
        }
    }

    componentDidMount() {
        fetch('https://greens-kiosk-api.antonyorenge.com/products')
        .then(response => response.json())
        .then(response => {
            this.setState({
                products: response
            });
        })
    }

        addToCart = (product) => {
            if (this.state.cart.indexOf(product) < 0 ) {
             this.setState(state => ({
                cart: this.state.cart.concat(product)
                
            }));
            }
    }
    render(){
        return (
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-8">
                        <Catalogue products={this.state.products} addToCart={this.addToCart}/>
                    </div>
                <div className="col-4">
                <Cart cart = {this.state.cart}/>
                </div>
               
                </div>
            </div>
        );
    }
}


export default Home;