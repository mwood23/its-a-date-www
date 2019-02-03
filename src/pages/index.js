import React from 'react';
import PowerImage from '../images/datesText.png';
import styled from 'styled-components';
import Layout from '../components/layout';
import Slider from 'react-slick';
import Logo from '../images/itsADateHorizontalDark.png';
import LogoStacked from '../images/itsADateLogoDark.png';
import AppHome from '../images/appHome.png';
import { CallToActionFooter } from '../components/common';
import { media } from '../utils/theme';

import Date1 from '../images/bubble3.png';
import Date2 from '../images/bubble1.png';
import Date3 from '../images/bubble2.png';
import Date4 from '../images/bubble4.png';
import Date5 from '../images/bubble5.png';

import IconBlurb1 from '../images/iconBlurb1.png';
import IconBlurb2 from '../images/iconBlurb2.png';
import IconBlurb3 from '../images/iconBlurb3.png';

import AppStoreDownload from '../images/appstore.png';

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
  background: url('https://res.cloudinary.com/itsadateapp/image/upload/q_auto:good/v1548817463/group-2.jpg')
    no-repeat center center fixed;
  background-size: cover;
  height: 90vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${props => props.theme.desktopHeaderHeight};

  ${media.forSmallOnly`
    height: 100vh;
    padding-top: ${props => props.theme.mobileHeaderHeight};
    background: url('https://res.cloudinary.com/itsadateapp/image/upload/q_auto:good/v1548817463/group-2.jpg') no-repeat 30% 0 fixed;
  `};
`;

const HeroContent = styled.div`
  max-width: 1100px;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: white;
    font-weight: 600;
    font-size: 48px;
    text-align: center;
  }

  p {
    color: white;
    font-size: 24px;
    text-align: center;
  }

  a {
    text-align: center;
  }

  ${media.forSmallMediumOnly`
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 20px;
    }
  `};

  ${media.forSmallOnly`
  padding: 0 2rem;

  h1 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
  `};
`;

const PowerStatementSection = styled.div`
  background-image: radial-gradient(circle at 50% 50%, #58cdb7, #14938b);
  padding: 5rem 3rem;
  line-height: 1.2;

  ${media.forSmallOnly`
    padding: 3rem 10px;
  `};
`;

const ResponsiveVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

// const PowerStatementTop = styled.p`
//   color: white;
//   font-size: 48px;
//   text-align: center;
//   margin: 3rem 0;

//   ${media.forSmallMediumOnly`
//     font-size: 42px;
//   `};

//   ${media.forSmallOnly`
//     font-size: 36px;
//   `};
// `;

const PowerStatementImage = styled.img`
  object-fit: cover;
  display: block;
  margin: 3rem auto 6rem;

  ${media.forSmallMediumOnly`
    width: 50%;
    margin: 2rem auto 3rem;
  `};

  ${media.forSmallOnly`
    margin: 1.5em auto 2rem;
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

const DownloadImage = styled.img`
  width: 180px;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <HeroSection>
        <HeroContent>
          <h1>The dating app that actually involves</h1>
          <PowerStatementImage src={PowerImage} alt="dates" />
          <p>Now available in Washington, D.C. and Northern Virginia!</p>
          <a
            href="https://itunes.apple.com/us/app/its-a-date-activity-dating/id1432859426?mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadImage src={AppStoreDownload} alt="Download It's a Date" />
          </a>
        </HeroContent>
      </HeroSection>
      <PowerStatementSection>
        <div style={{ margin: '0 auto', maxWidth: '800px' }}>
          <ResponsiveVideo>
            <iframe
              src="https://player.vimeo.com/video/311800634"
              title="launchVideo"
              width="853"
              height="505"
              frameBorder="0"
              allowFullScreen
            />
          </ResponsiveVideo>
        </div>
      </PowerStatementSection>
      <DateSlider />
      <IconBlurbSection />
      <AppShowcase />
      <CallToActionFooter />
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
