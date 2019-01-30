import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { SignUpForm } from './signupForm';

import Facebook from '../../images/facebookLogo.svg';
import Twitter from '../../images/twitterLogo.svg';
import Instagram from '../../images/instagramLogo.svg';
import { media } from '../../utils/theme';

const SOCIAL_IMAGES = [
  {
    link: 'https://www.instagram.com/itsadatehq/',
    image: Instagram,
    alt: 'Instagram'
  },
  {
    link: 'https://twitter.com/ItsADateHQ',
    image: Twitter,
    alt: 'Twitter'
  },
  {
    link: 'https://www.facebook.com/Its-a-Date-1945410205759788/',
    image: Facebook,
    alt: 'Facebook'
  }
];

const CallToActionContainer = styled.div`
  background-image: radial-gradient(circle at 50% 50%, #58cdb7, #14938b);
  padding: 4rem 4rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.forSmallMediumOnly`
    padding: 3rem 3rem 1rem;
    `};

  ${media.forSmallOnly`
    padding: 2rem 1rem 1rem;
  `};
`;

const CallToActionWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 5rem;

  ${media.forSmallMediumOnly`
    margin-bottom: 4rem;
  `};

  ${media.forSmallOnly`
    margin-bottom: 3rem;
  `};
`;
const CTAPowerStatement = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 400;
  color: white;

  ${media.forSmallMediumOnly`
    font-size: 46px;
  `};

  ${media.forSmallOnly`
    font-size: 38px;
  `};
`;
const CTAText = styled.p`
  font-weight: 300;
  font-size: 28px;
  color: white;
  text-align: center;
  margin-bottom: 3rem;

  ${media.forSmallMediumOnly`
    font-size: 24px;
  `};

  ${media.forSmallOnly`
    font-size: 18px;
    margin-bottom: 2rem;
  `};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: white;

  ${media.forSmallOnly`
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  `};
`;

const LeftContainer = styled.div``;

const Copyright = styled.p`
  margin: 0;
  color: white;
`;

const LinksContainer = styled.div`
  display: flex;

  ${media.forSmallOnly`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};

  span {
    margin: 0 5px;
    color: white;

    ${media.forSmallOnly`
      display: none;
    `};
  }

  a {
    color: white;

    &:hover {
      color: white;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  margin: 0 0.5rem;

  a {
    img {
      margin-bottom: 0;

      ${media.forSmallOnly`
        height: 35px;
        width: 35px;
      `};
    }
  }
`;

export class CallToActionFooter extends React.Component {
  render() {
    return (
      <CallToActionContainer>
        <CallToActionWrapper>
          <CTAPowerStatement>Who will you meet?</CTAPowerStatement>
          <CTAText>
            Join our waitlist! More access slots will be available soon.
          </CTAText>
          <SignUpForm />
        </CallToActionWrapper>

        <Footer>
          <LeftContainer>
            <Copyright> &copy; 2018 It's a Date, All Rights Reserved</Copyright>
            <LinksContainer>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </LinksContainer>
          </LeftContainer>
          <SocialIcons>
            {SOCIAL_IMAGES.map(social => {
              return (
                <SocialIcon key={social.link}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.image} alt={social.alt} />
                  </a>
                </SocialIcon>
              );
            })}
          </SocialIcons>
        </Footer>
      </CallToActionContainer>
    );
  }
}
