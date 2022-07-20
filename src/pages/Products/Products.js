import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = "https://fakestoreapi.com/products"
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="container text-center">
            <h2 className="mt-5 mb-5">Search Your Best Products !!</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                products.slice(0,15).map((product) => <Product 
                product={product}
                 key={product.id}>
                </Product>)
            }
            </Row>

        </div>
    );
};

export default Products;