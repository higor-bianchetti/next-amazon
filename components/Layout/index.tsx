import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Header from '../Header';

export default function Layout({children}: any) {
  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>

      <Header />
      
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
