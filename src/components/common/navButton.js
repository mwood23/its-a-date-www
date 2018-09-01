import styled from 'styled-components';

export const NavButton = styled.button`
  font-family: ${props => props.theme.defaultFont};
  text-transform: uppercase;
  color: 'red';
  padding: 0.5rem 1.25rem;
  border: solid 2px 'red';
  font-size: 14px;
  cursor: pointer;
  background: transparent;
  transition: ${props => props.theme.defaultTransition};
  height: 40px;
  background-color: radial-gradient(circle at 50% 50%, #f75f67, #dd5c83);

  &:hover {
    background-color: 'red';
    border-color: transparent;
    color: ${props => props.theme.white};
  }
`;
