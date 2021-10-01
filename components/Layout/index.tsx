import React from 'react';
import Head from 'next/head';
import { Container, Navbar } from 'react-bootstrap';
import styles from './styles.module.scss';

export default function Layout({children}: any) {
  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>

      <header>
        <Navbar expand="lg" variant="dark" className={styles.navbar}>
          <Container>
            <Navbar.Brand className={styles.navbarBrand}>Amazon</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      
      <main>
        <Container>
          {children}
        </Container>
      </main>

      <footer>
        All rights reserved. Made with ❤️ by Higor Bianchetti
      </footer>
    </div>
  )
}
