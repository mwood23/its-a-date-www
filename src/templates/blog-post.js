import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Content, { HTMLContent } from '../components/content';
import {
  PageWrapper,
  Container,
  CallToActionFooter
} from '../components/common';
import styled from 'styled-components';
import { media } from '../utils/theme';

const AuthorBlockContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  img {
    border-radius: 50%;
    object-fit: contain;
    height: 50px;
    width: 50px;
    margin: 0;
  }

  > div {
    margin-left: 1rem;

    p {
      margin: 0;
      color: #959595;

      &:last-child {
        font-size: 0.9rem;
      }
    }
  }
`;

const AuthorBlock = ({ author }) => {
  return (
    <AuthorBlockContainer>
      <img src={author.thumbnail} alt="author" />
      <div>
        <p>{author.id}</p>
        <p>{author.about}</p>
      </div>
    </AuthorBlockContainer>
  );
};

const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 600px;

  ${media.forSmallOnly`
    max-height: 400px;
  `};
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  author,
  heroImage,
  heroImageAlt
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section style={{ marginBottom: '2rem' }}>
      {helmet || ''}
      <h1>{title}</h1>
      {author ? <AuthorBlock author={author} /> : null}
      {heroImage ? (
        <HeroImage
          src={heroImage}
          alt={heroImageAlt ? heroImageAlt : 'hero image for blog post'}
        />
      ) : null}

      <PostContent content={content} />
      {/* {tags && tags.length ? (
        <div style={{ marginTop: '4rem' }}>
          <h4>Tags</h4>
          <ul className="taglist">
            {tags.map(tag => (
              <li key={tag + 'tag'}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null} */}
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PageWrapper style={{ marginTop: '3rem' }}>
        <Container>
          <BlogPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
              <Helmet titleTemplate="%s | Blog">
                <title>{`${post.frontmatter.title}`}</title>
                <meta
                  name="description"
                  content={`${post.frontmatter.description}`}
                />
              </Helmet>
            }
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
            author={post.frontmatter.author}
            heroImage={post.frontmatter.heroImage}
            heroImageAlt={post.frontmatter.heroImageAlt}
          />
        </Container>
      </PageWrapper>
      <CallToActionFooter />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        heroImage
        heroImageAlt
        author {
          id
          about
          thumbnail
        }
      }
      fields {
        slug
      }
    }
  }
`;
