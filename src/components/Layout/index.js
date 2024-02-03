import React from 'react';
import { Link, BrowserRouter, useHistory } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

import { Nav } from './styles';

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/1231313212312">Post</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
