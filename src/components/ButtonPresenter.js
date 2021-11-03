import styled from 'styled-components';

const ButtonPresenter = styled.button`
  font-size: 1rem;
  border: 0;
  cursor: pointer;
  &:nth-last-child(1) {
    border-radius: 0 0 0.75rem 0;
  }

  &:nth-last-child(4) {
    border-radius: 0 0 0 0.75rem;
  }
`;

export default ButtonPresenter;
