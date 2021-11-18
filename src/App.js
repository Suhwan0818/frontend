/* eslint-disable import/order */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useCallback, useRef} from 'react';
import GlobalStyle from './style/Global';
// import ButtonPresenter from './components/Presenter/ButtonPresenter';
import ControlContainer from './components/Container/ControlContainer';
import Calculator from './components/Presenter/CalculatorPresenter';
import DisplayContainer from './components/Container/DisplayContainer';
import {evaluate} from 'mathjs';

let numExist = true;
let positiveNegative = true;
const numArray = [];
let i = 1;

function App() {
  const [currentCal, setcurrentCal] = useState([]);
  const [resultCal, setresultCal] = useState('0');

  const stateRef = useRef([]);
  useEffect(() => {
    stateRef.current[0] = currentCal;
    stateRef.current[1] = resultCal;
  }, [currentCal, resultCal]);

  const tempChange = useCallback(e => {
    const value = e.target.value;
    const currentCalRef = stateRef.current[0];
    const resultCalRef = stateRef.current[1];
    switch (value) {
      case 'C':
        setresultCal(0);
        setcurrentCal('');
        break;

      case '+/-':
        if (positiveNegative === true) {
          setresultCal(-resultCalRef);
          positiveNegative = false;
        } else {
          setresultCal(+resultCalRef);
          positiveNegative = true;
        }
        break;

      case '=':
        try {
          setresultCal(evaluate(currentCalRef + resultCalRef));
          setcurrentCal('');
          numExist = true;
          i = 1;
          break;
        } catch (err) {
          break;
        }

      case '+':
        if (resultCalRef === '0') {
          break;
        } else {
          setcurrentCal(`${resultCalRef}+`);
          numExist = false;
          i = 1;
          break;
        }

      case '-':
        if (resultCalRef === '0') {
          break;
        } else {
          setcurrentCal(`${resultCalRef}-`);
          numExist = false;
          i = 1;
          break;
        }

      case 'x':
        if (resultCalRef === '0') {
          break;
        } else {
          setcurrentCal(`${resultCalRef}*`);
          numExist = false;
          i = 1;
          break;
        }

      case '/':
        if (resultCalRef === '0') {
          break;
        } else {
          setcurrentCal(`${resultCalRef}/`);
          numExist = false;
          i = 1;
          break;
        }
      case 'Del':
        setresultCal(' ');
        for (i = 0; i < numArray.length - 1; i += 1) {
          setresultCal(resultCalRef + numArray[i]);
        }
        break;

      default:
        if (resultCalRef === '0') {
          setresultCal(value);
          numArray[0] = value;
        } else if (numExist === true) {
          setresultCal(resultCalRef + value);
          numArray[i] = value;
          i += 1;
        } else {
          setresultCal(value);
          numArray[0] = value;
          numExist = true;
        }
    }
  }, []);
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
