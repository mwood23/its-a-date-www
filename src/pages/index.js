import React from 'react';
import Hero from '../images/hero.jpg';
import PowerImage from '../images/datesText.png';
import styled from 'styled-components';
import Layout from '../components/layout';
import Slider from 'react-slick';
import Logo from '../images/itsADateHorizontalDark.png';
import LogoStacked from '../images/itsADateLogoDark.png';
import AppHome from '../images/appHome.png';

import Date1 from '../images/bubble3.png';
import Date2 from '../images/bubble1.png';
import Date3 from '../images/bubble2.png';
import Date4 from '../images/bubble4.png';
import Date5 from '../images/bubble5.png';

import IconBlurb1 from '../images/iconBlurb1.png';
import IconBlurb2 from '../images/iconBlurb2.png';
import IconBlurb3 from '../images/iconBlurb3.png';

import Facebook from '../images/facebookLogo.svg';
import Twitter from '../images/twitterLogo.svg';
import Instagram from '../images/instagramLogo.svg';
import Medium from '../images/mediumLogo.svg';
import { media } from '../utils/theme';

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
  },
  {
    link: 'https://medium.com/its-a-date',
    image: Medium,
    alt: 'Medium'
  }
];

const SLIDES = [
  {
    slideImage: Date1,
    date: 'Kayaking?'
  },
  {
    slideImage: Date4,
    date: 'Drinks?'
  },
  {
    slideImage: Date5,
    date: 'Concert?'
  },
  {
    slideImage: Date3,
    date: 'Brunch?'
  },
  {
    slideImage: Date2,
    date: 'Exploring?'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const Blurbs = [
  {
    image: IconBlurb1,
    header: 'Post a Date',
    text:
      'Want to do a cooking class this weekend? Publish the date for your desired day and time.'
  },
  {
    image: IconBlurb2,
    header: 'Choose Your Match',
    text:
      'Review who would be interested in joining you, and select your  match for the date!'
  },
  {
    image: IconBlurb3,
    header: 'Get Going!',
    text:
      'Chat with your match, discuss the details, and meet up to have a great time.',
    imageClass: 'circle-image'
  }
];

const HeroSection = styled.div`
  background: url(${Hero}) no-repeat center center fixed;
  background-size: cover;
  height: 80vh;
  width: 100%;

  ${media.forSmallOnly`
    background: url(${Hero}) no-repeat 30% 0 fixed;
  `};
`;

const PowerStatementSection = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(circle at 50% 50%, #58cdb7, #14938b);
  padding: 0 3rem;
  line-height: 1.2;

  ${media.forSmallMediumOnly`
    height: 390px;
  `};

  ${media.forSmallOnly`
    padding: 0 1.5rem;
    height: 360px;
  `};
`;

const PowerStatementTop = styled.p`
  color: white;
  font-size: 48px;
  text-align: center;
  margin-bottom: 3rem;

  ${media.forSmallMediumOnly`
    font-size: 42px;
  `};

  ${media.forSmallOnly`
  font-size: 36px;
  `};
`;

const PowerStatementImage = styled.img`
  object-fit: cover;

  ${media.forSmallMediumOnly`
    width: 50%;
  `};

  ${media.forSmallOnly`
    width: 70%;
  `};
`;

const DateSliderContainer = styled.div`
  background-image: linear-gradient(to bottom, #ffffff, #eafcfa);
  padding: 4rem 0;

  ${media.forSmallMediumOnly`
    padding: 0 0 3rem;
  `};

  ${media.forSmallOnly`
    padding: 2rem 0;
  `};
`;

const CustomSlideContainer = styled.div`
  height: 550px;
  display: flex;
  max-width: 1140px;
  margin: 0 auto;

  ${media.forSmallOnly`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  `};
`;

const SlideImage = styled.img`
  object-fit: contain;
  width: 45%;

  ${media.forSmallMediumOnly`
    margin: 0;
  `};

  ${media.forSmallOnly`
    width: 55%;
  `};
`;

const CustomSlideSecondaryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 3rem 6rem;
  width: 55%;

  ${media.forSmallMediumOnly`
    padding: 0 1.5rem 4rem;
  `};

  ${media.forSmallOnly`
    padding: 2rem 2rem 0;
    width: 70%;
    align-items: center;
    justify-content: center;
  `};
`;

const CustomSlideText = styled.p`
  color: #23baa4;
  font-size: 68px;
  line-height: 1.2;

  ${media.forSmallMediumOnly`
    font-size: 60px;
  `};

  ${media.forSmallOnly`
    font-size: 50px;
  `};
`;
const CustomSlideSecondaryImage = styled.img`
  object-fit: contain;
  padding-right: 5rem;

  ${media.forSmallOnly`
    margin: 0;
    padding: 0;
  `};
`;

const BottomSliderText = styled.p`
  color: #5e5e5e;
  text-align: center;
  margin: 0;
  font-size: 24px;
  padding-top: 1rem;

  ${media.forSmallOnly`
    padding: 0 1rem 1rem;
    font-size: 20px;
  `};
`;
const BottomSliderTextStong = BottomSliderText.extend`
  font-weight: 500;
  font-size: 28px;

  ${media.forSmallOnly`
    padding: 0 1rem;
    font-size: 22px;
  `};
`;

const CustomSlide = ({ index, props, slide }) => {
  return (
    <CustomSlideContainer {...props}>
      <SlideImage src={slide.slideImage} alt={slide.date} />
      <CustomSlideSecondaryContent>
        <CustomSlideText>{slide.date}</CustomSlideText>
        <CustomSlideSecondaryImage src={Logo} alt="It's a Date" />
      </CustomSlideSecondaryContent>
    </CustomSlideContainer>
  );
};

const DateSlider = () => {
  return (
    <DateSliderContainer>
      <Slider
        {...settings}
        appendDots={dots => (
          <ul style={{ position: 'relative', padding: '2rem 0' }}>{dots}</ul>
        )}
      >
        {SLIDES.map((slide, index) => (
          <CustomSlide slide={slide} index={index} key={slide.date} />
        ))}
      </Slider>
      <BottomSliderText>
        Enough chatting through a keyboard. Get out and do something
      </BottomSliderText>
      <BottomSliderTextStong>
        with someone who shares a common interest!
      </BottomSliderTextStong>
    </DateSliderContainer>
  );
};

const IconBlurbContainer = styled.div`
  background-image: radial-gradient(circle at 50% 50%, #58cdb7, #14938b);
  padding: 4rem;

  ${media.forSmallMediumOnly`
    padding: 3rem 2rem;
  `};

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;
const Header = styled.h2`
  color: white;
  text-align: center;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 44px;

  ${media.forSmallMediumOnly`
    font-size: 38px;
  `};

  ${media.forSmallOnly`
    font-size: 34px;
    `};

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;
const IconBlurbWrapper = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;

  ${media.forSmallOnly`
    flex-direction: column;
    width: 70%;
  `};

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const IconBlurb = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;

  ${media.forSmallMediumOnly`
    padding: 1rem;
  `};
`;
const IBImage = styled.img``;
const IBHeader = styled.h3`
  color: white;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 24px;
  text-align: center;

  ${media.forSmallMediumOnly`
    font-size: 26px;
  `};

  ${media.forSmallOnly`
    margin-bottom: 0.75rem;
  `};
`;
const IBContent = styled.p`
  color: white;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 20px;
  text-align: center;

  ${media.forSmallMediumOnly`
    font-size: 18px;
  `};
`;

const IconBlurbSection = () => {
  return (
    <IconBlurbContainer>
      <Header>How does it work?</Header>
      <IconBlurbWrapper>
        {Blurbs.map(blurb => (
          <IconBlurb key={blurb.header}>
            <IBImage
              src={blurb.image}
              alt={blurb.header}
              className={blurb.imageClass}
            />
            <IBHeader>{blurb.header}</IBHeader>
            <IBContent>{blurb.text}</IBContent>
          </IconBlurb>
        ))}
      </IconBlurbWrapper>
    </IconBlurbContainer>
  );
};

const AppShowcaseContainer = styled.div`
  background-image: linear-gradient(to bottom, #ffffff, #eafcfa);
  padding: 4rem;

  ${media.forSmallMediumOnly`
    padding: 3rem;
  `};

  ${media.forSmallOnly`
    padding: 2rem 1rem;
  `};
`;

const AppShowcaseWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;

  ${media.forSmallOnly`
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  `};
`;
const AppDetails = styled.div`
  width: 60%;
  img {
    object-fit: cover;
    width: 40%;
  }

  ${media.forSmallMediumOnly`
    img {
      width: 35%;
    }
  `};

  ${media.forSmallOnly`
    width: 100%;
    img {
      display: none;
    }
  `};
`;
const AppImage = styled.img`
  object-fit: contain;
  padding: 0 3rem 0 5rem;
  width: 40%;
  margin-bottom: 0;

  ${media.forSmallMediumOnly`
    padding: 0 0 0 3rem;
  `};

  ${media.forSmallOnly`
    width: 45%;
    padding: 0 0 2rem;
  `};

  @media (max-width: 480px) {
    width: 70%;
  }
`;

const AppShowcaseLine1 = styled.p`
  font-size: 28px;
  line-height: 1.2;
  color: #5e5e5e;
  margin-bottom: 0.5rem;

  ${media.forSmallMediumOnly`
    font-size: 24px;
  `};

  ${media.forSmallOnly`
    font-size: 18px;
    text-align: center;
  `};
`;
const AppShowcaseLine2 = styled.p`
  font-weight: 300;
  font-size: 28px;
  line-height: 1.2;
  color: #5e5e5e;
  margin-bottom: 4rem;

  ${media.forSmallMediumOnly`
    font-size: 24px;
    margin-bottom: 2rem;
  `};

  ${media.forSmallOnly`
    font-size: 18px;
    text-align: center;
  `};
`;

const FillBar = styled.div`
  background-image: radial-gradient(circle at 50% 0, #f75f67, #dd5c83);
  height: 30px;
  border-radius: 14px;
  margin-bottom: 0.5rem;
`;
const FillBarText = styled.div`
  color: #f65f68;
  text-transform: uppercase;
  text-align: center;
`;

const AccessRegistrationContainer = styled.div``;

const AppShowcase = () => {
  return (
    <AppShowcaseContainer>
      <AppShowcaseWrapper>
        <AppDetails>
          <img src={LogoStacked} alt="It's a Date logo" />
          <AppShowcaseLine1>Now available in the DC area!</AppShowcaseLine1>
          <AppShowcaseLine2>
            Sign up to join other active singles and get early access to
            exclusive events.
          </AppShowcaseLine2>

          <AccessRegistrationContainer>
            <FillBar />
            <FillBarText>Pre-access registration is full</FillBarText>
          </AccessRegistrationContainer>
        </AppDetails>
        <AppImage src={AppHome} />
      </AppShowcaseWrapper>
    </AppShowcaseContainer>
  );
};

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
const CTAInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  ${media.forSmallMediumOnly`
    height: 40px;
  `};

  ${media.forSmallOnly`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  `};
`;

const CTAInput = styled.input`
  height: 100%;
  flex: 3;
  border-radius: 4px;
  border: none;
  padding: 0 1rem;
  color: #444444;

  ${media.forSmallMediumOnly`
    font-size: 16px;
  `};

  ${media.forSmallOnly`
    font-size: 18px;
    padding: 7px 1rem;
    margin-bottom: 1rem;
    width: 60%;
    `};

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const CTASubmit = styled.input`
  margin-left: 10px;
  height: 100%;
  flex: 1;
  border-radius: 4px;
  background-color: #f05f6f;
  color: white;
  border: none;
  font-weight: 300;
  cursor: pointer;
  transition: ${props => props.theme.defaultTransition};

  &:hover {
    background-color: #d74656;
  }

  ${media.forSmallMediumOnly`
    font-size: 16px;
  `};

  ${media.forSmallOnly`
    padding: 7px 1rem;
    margin: 0;
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

class CallToAction extends React.Component {
  state = {
    emailInput: ''
  };

  render() {
    return (
      <CallToActionContainer>
        <CallToActionWrapper>
          <CTAPowerStatement>Who will you meet?</CTAPowerStatement>
          <CTAText>
            Join our waitlist! More access slots will be available soon.
          </CTAText>
          <div id="mc_embed_signup">
            <form
              action="https://app.us19.list-manage.com/subscribe/post?u=76beb942e1dccbc60cde83f66&amp;id=c497c63cab"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate
            >
              <CTAInputContainer id="mc_embed_signup_scroll">
                <CTAInput
                  type="email"
                  value={this.state.emailInput}
                  onChange={e => {
                    this.setState({ emailInput: e.target.value });
                  }}
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="Enter email address"
                  required
                />
                <div
                  style={{ position: 'absolute', left: '-5000px' }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_76beb942e1dccbc60cde83f66_c497c63cab"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <CTASubmit
                  type="submit"
                  value="Get on the waitlist"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              </CTAInputContainer>
            </form>
          </div>
        </CallToActionWrapper>

        <Footer>
          <LeftContainer>
            <Copyright> &copy; 2018 It's a Date, All Rights Reserved</Copyright>
            <LinksContainer>
              <a href="https://its-a-date.netlify.com/">Privacy Policy</a>
              <span>|</span>
              <a href="https://its-a-date.netlify.com/">Terms and Conditions</a>
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

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <HeroSection />
      <PowerStatementSection>
        <PowerStatementTop>
          The dating app that actually involves
        </PowerStatementTop>
        <PowerStatementImage src={PowerImage} alt="dates" />
      </PowerStatementSection>
      <DateSlider />
      <IconBlurbSection />
      <AppShowcase />
      <CallToAction />
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "images/hero.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
