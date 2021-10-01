import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import { FaShoppingCart } from 'react-icons/fa';

interface ProductProps {
  product: {
    id: number,
    name: string,
    country: string,
    type: string,
    year: number,
    image: string,
    price: number,
    brand: string,
    rating: number,
    numReviews: number,
    countInStock: number,
    description: string
  }
}

export default function Product({product}: ProductProps) {
  return (
    <Card>
      <Card.Img src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div className={styles.cardFooter}>
          <Card.Text>
            <strong>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(product.price)}</strong>
          </Card.Text>
          <Button size="sm">
            <FaShoppingCart />
            <span>Add to cart</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}