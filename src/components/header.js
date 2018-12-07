import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/itsADateHorizontal.png';
import LogoDark from '../images/itsADateHorizontalDark.png';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import { media } from '../utils/theme';

const HeaderWrapper = styled.div`
  height: ${props => props.theme.desktopHeaderHeight};
  background: ${props => (props.scrolled ? props.theme.white : 'transparent')};
  box-shadow: ${props =>
    props.scrolled ? '0 2px 4px 0 rgba(186, 186, 186, 0.5)' : 'none'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;
  padding: 0 3rem;
  transition: ${props => props.theme.defaultTransition};

  ${media.forSmallOnly`
    height: ${props => props.theme.mobileHeaderHeight};
    padding: 0 1rem;
  `};
`;

const GetStartedButton = styled.button`
  background-image: radial-gradient(circle at 50% 50%, #f75f67, #dd5c83);
  box-shadow: 0 5px 10px -3px #de577e;
  border: none;
  height: 45px;
  width: 200px;
  border-radius: 40px;
  color: ${props => props.theme.white};
  font-size: 18px;
  cursor: pointer;
  z-index: 100;
  position: relative;

  ${media.forSmallOnly`
    height: 30px;
    font-size: 14px;
    width: 130px;
  `};

  &:before {
    border-radius: inherit;
    background-image: radial-gradient(circle at 50% 50%, #dd5c83, #f75f67);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: -100;
    transition: opacity 0.75s;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }
`;

const HeaderImage = styled(Link)`
  display: inline-block;
  width: 220px;

  ${media.forSmallOnly`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  `};

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    font-family: 'object-fit: contain;';
    margin: 0;
    padding: 0.25rem 0;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavOpen: false,
      scrolled: false
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 200;

      if (scrolled !== this.state.scrolled) {
        this.setState({ scrolled });
      }
    });
  }

  render() {
    let logo = Logo;
    const onSecondaryPage =
      typeof window !== 'undefined' && window.location.pathname !== '/';
    if (this.state.scrolled || onSecondaryPage) {
      logo = LogoDark;
    }
    return (
      <HeaderWrapper scrolled={this.state.scrolled || onSecondaryPage}>
        <HeaderImage to="/">
          <img src={logo} alt="It's a Date logo" />
        </HeaderImage>
        {onSecondaryPage ? (
          <div />
        ) : (
          <GetStartedButton onClick={() => animateScroll.scrollToBottom()}>
            Get Started
          </GetStartedButton>
        )}
      </HeaderWrapper>
    );
  }
}

export default Header;
