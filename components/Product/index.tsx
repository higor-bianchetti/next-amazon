import React from 'react';
import NextLink from 'next/link';
import { Card, Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import { FaCartPlus } from 'react-icons/fa';

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
    description: string,
    slug: string
  }
}

export default function Product({product}: ProductProps) {
  return (
    <Card>
      <NextLink href={`/product/${product.slug}`} passHref>
        <a>
          <Card.Img src={product.image} alt={product.name} />
        </a>
      </NextLink>
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
            <FaCartPlus />
            <span>Add to cart</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
