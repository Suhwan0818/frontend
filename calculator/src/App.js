import React, {useReducer, useCallback} from 'react';
import GlobalStyle from './style/Global';
import ControlContainer from './components/Container/ControlContainer';
import Calculator from './components/Presenter/CalculatorPresenter';
import reducer from './components/Context/Reducer';
import DisplayContainer from './components/Container/DisplayContainer';
import {
  RESET_CAL,
  POSNEG_CAL,
  EQUAL_CAL,
  PERCENT_CAL,
  DELETE_CAL,
  INPUT_CAL,
} from './components/Context/Action';

const CalDipatch = React.createContext();
const init = {currentCal: [], resultCal: 0};

const App = () => {
  const [states, dispatch] = useReducer(reducer, init);

  const {currentCal, resultCal} = states;

  const calculateFunc = useCallback(e => {
    const {value} = e.target;
    console.log(e);
    switch (value) {
      case 'C':
        dispatch({type: RESET_CAL});
        break;

      case '+/-':
        dispatch({type: POSNEG_CAL});
        break;

      case '=':
        dispatch({type: EQUAL_CAL});
        break;

      case '%':
        dispatch({type: PERCENT_CAL});
        break;

      case 'Del':
        dispatch({type: DELETE_CAL});
        break;

      default:
        dispatch({type: INPUT_CAL, value});
        break;
    }
  }, []);

  return (
    <CalDipatch.Provider value={dispatch}>
      <Calculator>
        <DisplayContainer currentCal={currentCal} resultCal={resultCal} />
        <ControlContainer calculateFunc={calculateFunc} />
      </Calculator>
      <GlobalStyle />
    </CalDipatch.Provider>
  );
};

export default App;
