import React from 'react';
import NextLink from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function Header() {
  return(
    <header>
      <Navbar expand="lg" variant="dark" className={styles.navbar}>
        <Container fluid>
          <NextLink href="/">
            <Navbar.Brand className={styles.navbarBrand}>Amazon</Navbar.Brand>
          </NextLink>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NextLink href="/cart" passHref>
                <Nav.Link className={styles.navLink}>
                  <FaShoppingCart />
                  <span>Cart</span>
                </Nav.Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Nav.Link className={styles.navLink}>
                  <FaSignInAlt />
                  <span>Login</span>
                </Nav.Link>
              </NextLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
