import React from 'react'
import styled from 'styled-components'

const BlogPostContentWrapper = styled.div`

p {
  > img {
    display: block;
    margin: 0 auto;
    width: 100%;
    object-fit: cover;
  }
}
`

export const HTMLContent = ({ content, className }) => (
  <BlogPostContentWrapper className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <BlogPostContentWrapper className={className}>{content}</BlogPostContentWrapper>
)

HTMLContent.propTypes = Content.propTypes

export default Content