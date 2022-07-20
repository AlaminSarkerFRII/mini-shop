
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Product.css"

const Product = ({ product }) => {
    const navigate = useNavigate()
    const { id, title, price, description, image } = product

    const handleProductDetails = () => {
        navigate(`/product/${id}`)
    }
    return (
        <div>
            <div className="col text-center ms-auto">
                <Card className="p-4">
                    <Card.Img style={{ width: "200px", height: "200px" }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title.slice(0,20)}</Card.Title>
                        <h6>Price : {price}$</h6>
                        <Card.Text className='text-md-start lh-sm'>
                            {description.slice(0,150)}
                        </Card.Text>
                        <Button onClick={handleProductDetails} variant="primary">See Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Product;