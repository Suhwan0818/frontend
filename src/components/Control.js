import React from 'react';
import styled from 'styled-components';
import ButtonPresenter from './ButtonPresenter';

const ControlPresent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 0.75rem 0.75rem;
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;

function Control() {
  return (
    <ControlPresent>
      <ButtonPresenter>C</ButtonPresenter>
      <ButtonPresenter>+/-</ButtonPresenter>
      <ButtonPresenter>%</ButtonPresenter>
      <ButtonPresenter>/</ButtonPresenter>
      <ButtonPresenter>7</ButtonPresenter>
      <ButtonPresenter>8</ButtonPresenter>
      <ButtonPresenter>9</ButtonPresenter>
      <ButtonPresenter>X</ButtonPresenter>
      <ButtonPresenter>4</ButtonPresenter>
      <ButtonPresenter>5</ButtonPresenter>
      <ButtonPresenter>6</ButtonPresenter>
      <ButtonPresenter>-</ButtonPresenter>
      <ButtonPresenter>3</ButtonPresenter>
      <ButtonPresenter>2</ButtonPresenter>
      <ButtonPresenter>1</ButtonPresenter>
      <ButtonPresenter>+</ButtonPresenter>
      <ButtonPresenter>0</ButtonPresenter>
      <ButtonPresenter>.</ButtonPresenter>
      <ButtonPresenter>&#8592;</ButtonPresenter>
      <ButtonPresenter>=</ButtonPresenter>
    </ControlPresent>
  );
}

export default Control;
