import React from 'react';
import Hero from '../images/hero.jpg';
import PowerImage from '../images/datesText.png';
import styled from 'styled-components';
import Layout from '../components/layout';
import Slider from 'react-slick';
import Logo from '../images/itsADateHorizontalDark.png';

import Date1 from '../images/bubble3.png';
import Date2 from '../images/bubble1.png';
import Date3 from '../images/bubble2.png';
import Date4 from '../images/bubble4.png';
import Date5 from '../images/bubble5.png';

import IconBlurb1 from '../images/iconBlurb1.png';
import IconBlurb2 from '../images/iconBlurb2.png';
import IconBlurb3 from '../images/iconBlurb3.png';

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
    slideImage: Date3,
    date: 'Brunch?'
  },
  {
    slideImage: Date2,
    date: 'Exploring?'
  },
  {
    slideImage: Date5,
    date: 'Lunch?'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  // autoplay: true,
  // autoplaySpeed: 4000,
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
      'Chat with your match, discuss the details, and meet up to have a great time.'
  }
];

const HeroSection = styled.div`
  background-image: url(${Hero});
  height: 74vh;
  width: 100%;
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
`;

const PowerStatementTop = styled.p`
  color: white;
  font-size: 48px;
  text-align: center;
  margin-bottom: 3rem;
`;

const PowerStatementImage = styled.img`
  object-fit: cover;
`;

const DateSliderContainer = styled.div`
  background-image: linear-gradient(to bottom, #ffffff, #eafcfa);
  padding: 4rem 0;
`;

const CustomSlideContainer = styled.div`
  height: 650px;
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
`;

const SlideImage = styled.img`
  object-fit: contain;
  width: 45%;
`;

const CustomSlideSecondaryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: 6rem;
  width: 55%;
  padding-left: 3rem;
`;

const CustomSlideText = styled.p`
  color: #23baa4;
  font-size: 78px;
  line-height: 1.2;
`;
const CustomSlideSecondaryImage = styled.img`
  object-fit: contain;
`;

const BottomSliderText = styled.p`
  color: #5e5e5e;
  text-align: center;
  margin: 0;
  font-size: 24px;
  padding-top: 1.5rem;
`;
const BottomSliderTextStong = BottomSliderText.extend`
  font-weight: 500;
  font-size: 28px;
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
`;
const Header = styled.h2`
  color: white;
  text-align: center;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 44px;
`;
const IconBlurbWrapper = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
`;
const IconBlurb = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
`;
const IBImage = styled.img``;
const IBHeader = styled.h3`
  color: white;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 24;
  text-align: center;
`;
const IBContent = styled.p`
  color: white;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 20;
  text-align: center;
`;

const IconBlurbSection = () => {
  return (
    <IconBlurbContainer>
      <Header>
        Match with like-minded individuals who share common interests!
      </Header>
      <IconBlurbWrapper>
        {Blurbs.map(blurb => (
          <IconBlurb key={blurb.header}>
            <IBImage src={blurb.image} alt={blurb.header} />
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
`;
const AppDetails = styled.div``;
const AppImage = styled.img``;

const AppShowcase = () => {
  return (
    <AppShowcaseContainer>
      <AppDetails>
        <p>in here</p>
      </AppDetails>
      <AppImage />
    </AppShowcaseContainer>
  );
};

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
