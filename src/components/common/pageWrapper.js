import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';

const PageWrapperContainer = styled.div`
  padding-top: ${props => props.theme.desktopHeaderHeight};

  ${media.forSmallOnly`
    padding-top: ${props => props.theme.mobileHeaderHeight};
  `};
`;

export const PageWrapper = ({ children, style }) => {
  return <PageWrapperContainer style={style}>{children}</PageWrapperContainer>;
};
