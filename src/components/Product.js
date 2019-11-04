import React from 'react';


class Product extends React.Component {

    
    render() {
        return (
            <div className="card col-3" style={{width: "18rem"}}>
                <img src= {this.props.product.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.name}</h5>
                        <p className="card-text">KES {this.props.product.price}</p>
                        <button className="btn btn-success" onClick = {() => this.props.addToCart(this.props.product)}>Add to Cart</button>
            </div>
        </div>
        );
    }
}


export default Product;