import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Header from '../Header';

interface LayoutProps {
  title?: string;
  description?: string;
  children: any;
}

export default function Layout({title, description, children}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazon` : 'Next Amazon'}</title>
        {description && 
          <meta name="description" content={description}></meta>
        }
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
