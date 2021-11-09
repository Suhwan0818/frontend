/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import GlobalStyle from './style/Global';
// import ButtonPresenter from './components/Presenter/ButtonPresenter';
import ControlContainer from './components/Container/ControlContainer';
import Calculator from './components/Presenter/CalculatorPresenter';
import DisplayContainer from './components/Container/DisplayContainer';

function App() {
  const [currentCal, setcurrentCal] = useState(['1', '+', '9']);
  const [resultCal, setresultCal] = useState('0');

  const tempChange = e => {
    const value = e.target.value;
    switch (value) {
      case 'C':
        setresultCal(0);
        break;

      case '=':
        setresultCal('=');
        break;

      default:
        setresultCal(value);
        break;
    }
  };
  return (
    <>
      <Calculator>
        <DisplayContainer CurrentCal={currentCal} ResultCal={resultCal} />
        <ControlContainer calculateFunc={tempChange} />
      </Calculator>
      <GlobalStyle />
    </>
  );
}

export default App;
