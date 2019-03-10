import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Header from './header';
import './layout.css';
import { theme } from '../utils/theme';

const ContentWrapper = styled.div``;

/**
 * There's a nasty bug in Gatsby that I can't really identify. Essentially, the components mount before all
 * of the styles are loaded on an empty cache and cause the scroll bar to operate odd. Also, the header doesn't
 * update as expected from state changes. Forcing a remount after render is the only thing that fixed the issue.
 */
class Layout extends React.Component {
  state = {
    key: 1
  };
  componentDidMount() {
    this.setState({
      key: 2
    });
  }

  render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <Fragment>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  {
                    name: 'description',
                    content:
                      "It's a Date is an activity based dating app that focuses on bringing people of similar interests together. Coming soon to Washington, D.C.!" //eslint-disable-line
                  },
                  {
                    name: 'keywords',
                    content: 'dating, relationships, actities'
                  }
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Header
                siteTitle={data.site.siteMetadata.title}
                key={this.state.key}
              />

              <ContentWrapper>{children}</ContentWrapper>
            </Fragment>
          </ThemeProvider>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
