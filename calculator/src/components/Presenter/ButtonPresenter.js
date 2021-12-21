import styled, {css} from 'styled-components';
import {darken} from 'polished';

const ButtonPresenter = styled.button`
  font-size: 1em;
  border: 0;
  cursor: pointer;
  &:nth-last-child(1) {
    border-radius: 0 0 0.75rem 0;
  }
  &:nth-last-child(4) {
    border-radius: 0 0 0 0.75rem;
  }
  ${props => {
    const selectColor = props.theme.Colors[props.color];
    return css`
      background-color: ${selectColor};
      &:hover {
        background-color: ${darken(0.1, selectColor)};
      }
    `;
  }}
`;

export default ButtonPresenter;
