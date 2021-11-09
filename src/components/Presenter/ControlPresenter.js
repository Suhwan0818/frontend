import React from 'react';
import styled from 'styled-components';
import ButtonPresenter from './ButtonPresenter';

const ControlPresenter = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 0.75rem 0.75rem;
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;

function Control() {
  return (
    <ControlPresenter>
      <ButtonPresenter color="mediumGrey">C</ButtonPresenter>
      <ButtonPresenter color="mediumGrey">+/-</ButtonPresenter>
      <ButtonPresenter color="mediumGrey">%</ButtonPresenter>
      <ButtonPresenter color="lightOrange">/</ButtonPresenter>
      <ButtonPresenter color="lightGrey">7</ButtonPresenter>
      <ButtonPresenter color="lightGrey">8</ButtonPresenter>
      <ButtonPresenter color="lightGrey">9</ButtonPresenter>
      <ButtonPresenter color="lightOrange">X</ButtonPresenter>
      <ButtonPresenter color="lightGrey">4</ButtonPresenter>
      <ButtonPresenter color="lightGrey">5</ButtonPresenter>
      <ButtonPresenter color="lightGrey">6</ButtonPresenter>
      <ButtonPresenter color="lightOrange">-</ButtonPresenter>
      <ButtonPresenter color="lightGrey">3</ButtonPresenter>
      <ButtonPresenter color="lightGrey">2</ButtonPresenter>
      <ButtonPresenter color="lightGrey">1</ButtonPresenter>
      <ButtonPresenter color="lightOrange">+</ButtonPresenter>
      <ButtonPresenter color="lightGrey">0</ButtonPresenter>
      <ButtonPresenter color="lightGrey">.</ButtonPresenter>
      <ButtonPresenter color="lightGrey">&#8592;</ButtonPresenter>
      <ButtonPresenter color="mediumOrange">=</ButtonPresenter>
    </ControlPresenter>
  );
}

export default Control;
