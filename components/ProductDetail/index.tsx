import Image from 'next/image';
import { Col, Container, ListGroup, Row, Button } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import styles from './styles.module.scss';

interface ProductDeailProps {
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

export default function ProductDetail({product}: ProductDeailProps) {
  return (
    <Container>
      <Row>
        <Col md={5} xs={12}>
          <Image src={product.image} alt={product.name} width={640}
            height={640} layout="responsive"
          />
        </Col>
        <Col md={4} xs={12}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Type: {product.type} - {product.year}
            </ListGroup.Item>
            <ListGroup.Item>
              Brand: {product.brand}
            </ListGroup.Item>
            <ListGroup.Item>
              Rating: {product.rating} stars ({product.numReviews} reviews)
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} xs={12}>
          <ListGroup>
            <ListGroup.Item>
              <Container>
                <Row>
                  <Col xs={6}>Price</Col>
                  <Col xs={6}>
                    <strong>
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      }).format(product.price)}
                    </strong>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item>
              <Container>
                <Row>
                  <Col xs={6}>Status</Col>
                  <Col xs={6}>
                    {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item className={styles.btnAddToCart}>
              <div className="d-grid gap-2">
                <Button>
                  <FaCartPlus />
                  <span>Add to cart</span>
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
