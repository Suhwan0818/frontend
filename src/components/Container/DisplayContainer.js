import React from 'react';
import PropTypes from 'prop-types';
import {
  CurrentCalPresenter,
  ResultCalPresenter,
  DisplayPresenter,
} from '../Presenter/DisplayPresenter';

function DisplayContainer({currentCal, resultCal}) {
  return (
    <DisplayPresenter>
      <CurrentCalPresenter>{currentCal}</CurrentCalPresenter>
      <ResultCalPresenter>{resultCal}</ResultCalPresenter>
    </DisplayPresenter>
  );
}

DisplayContainer.propTypes = {
  currentCal: PropTypes.array,
  resultCal: PropTypes.string.isRequired,
};

export default DisplayContainer;
