import React from 'react';
import Layout from '../components/layout';
import {
  PageWrapper,
  Container,
  CallToActionFooter
} from '../components/common';

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  console.log(posts);
  return (
    <Layout>
      <PageWrapper style={{ marginTop: '1rem' }}>
        <Container>
          <h1>Blog</h1>
          <p>
            A blog about all things It's a Date and dating in a digital world.
          </p>
          <h2>Recent Posts</h2>
          {posts.map(post => {
            return (
              <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                <p>hello</p>
              </div>
            );
          })}
        </Container>
      </PageWrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default Blog;
