import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1 style={{ fontFamily: 'Poppins' }}>Hi people</h1>
    <p style={{ fontFamily: 'Poppins' }}>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
