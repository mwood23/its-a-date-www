import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div style={{ height: '3000px' }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400, maxHeight: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
