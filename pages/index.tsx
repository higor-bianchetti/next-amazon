import type { NextPage } from 'next'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import data from '../utils/data';
import Product from '../components/Product';

interface Product {
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

const Home: NextPage = () => {
  const productPerLines = 3;
  const rows = [...Array(Math.ceil(data.products.length / productPerLines))];

  const productRows = rows.map((row, id) =>
    data.products.slice(id * productPerLines, id * productPerLines + productPerLines)
  );

  const products = productRows.map((row, id) => (
    <Row className="mb-3" key={id}>
      { row.map((product: Product) => 
        <Col md={4} key={product.id}>
          <Product product={product} />
        </Col>
      ) }
    </Row>
  ));

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>Products</h1>
          </Col>
        </Row>
        { products }
      </Container>
    </Layout>
  )
}

export default Home
