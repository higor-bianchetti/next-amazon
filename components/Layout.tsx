import React, { ReactElement } from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({children}: any) {
  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography>Amazon</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        {children}
      </Container>

      <footer>
        <Typography>
          All rights reserved. Made with ❤️ by Higor Bianchetti
        </Typography>
      </footer>
    </div>
  )
}
