import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {  useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    // const {  title, description, image } = product

    useEffect(() => {
        const url = `https://fakestoreapi.com/products/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProduct(data)
                console.log(data)
            });
    }, [])

    return (
        <div className="container mt-5">
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={product.image} class="img-fluid rounded-start p-4" alt="show-images" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body justify-content-center">
                            <h5 class="card-title">{product.title}</h5>
                            <h6 class="card-title">{product.category}</h6>
                            <h6 class="card-title">Price: {product.price} $</h6>
                            <p class="card-text">{product.description}</p>
                            <p class="card-text">Rating: {product.rating?.count}</p>
                            <Button onClick={()=>navigate("/booking")}>Booking Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;