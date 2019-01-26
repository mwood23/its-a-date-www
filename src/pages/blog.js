import React from 'react';
import Layout from '../components/layout';
import { PageWrapper, Container } from '../components/common';
import styled from 'styled-components';
import { Link } from 'gatsby';

const BlogItem = styled.div`
  box-shadow: 0 1px 8px 0 rgba(186, 186, 186, 0.5);
  margin-bottom: 1rem;
  padding: 1.5rem;
  text-decoration: none !important;
  color: ${props => props.theme.defaultFontColor} !important;
  border-radius: 5px;
  transition: 100ms linear;

  &:hover {
    box-shadow: 0 3px 14px 0 rgba(186, 186, 186, 0.5);
  }
`;

const DateAuthorLine = styled.p`
  color: #959595;
  font-size: 0.9rem;
`;

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
              <Link
                to={post.node.fields.slug}
                style={{ textDecoration: 'none' }}
              >
                <BlogItem key={post.node.id}>
                  <h3 style={{ marginBottom: '5px' }}>
                    {post.node.frontmatter.title}
                  </h3>
                  <DateAuthorLine>
                    {post.node.frontmatter.date} /{' '}
                    {post.node.frontmatter.author.id}
                  </DateAuthorLine>
                  <p>{post.node.excerpt}</p>
                </BlogItem>
              </Link>
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
            author {
              id
              about
              thumbnail
            }
          }
        }
      }
    }
  }
`;

export default Blog;
