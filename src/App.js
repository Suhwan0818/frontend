import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './style/Global';
import {CurrentCal, ResultCal, Display} from './components/Display';
// import ButtonPresenter from './components/ButtonPresenter';
import Control from './components/Control';

const Calculator = styled.div`
  width: 20rem;
  height: 30rem;
  border-radius: 0.75rem;
  background-color: white;

  display: flex;
  flex-direction: column;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <>
      <Calculator>
        <Display>
          <CurrentCal>1+1</CurrentCal>
          <ResultCal>2</ResultCal>
        </Display>
        <Control />
      </Calculator>
      <GlobalStyle />
    </>
  );
}

export default App;
