import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';

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

export class SignUpForm extends React.Component {
  state = {
    emailInput: ''
  };

  render() {
    return (
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
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </CTAInputContainer>
        </form>
      </div>
    );
  }
}
