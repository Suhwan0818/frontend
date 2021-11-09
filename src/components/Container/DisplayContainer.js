import React from 'react';
import PropTypes from 'prop-types';
import {
  CurrentCalPresenter,
  ResultCalPresenter,
  DisplayPresenter,
} from '../Presenter/DisplayPresenter';

function DisplayContainer({CurrentCal, ResultCal}) {
  return (
    <DisplayPresenter>
      <CurrentCalPresenter>{CurrentCal}</CurrentCalPresenter>
      <ResultCalPresenter>{ResultCal}</ResultCalPresenter>
    </DisplayPresenter>
  );
}

DisplayContainer.propTypes = {
  CurrentCal: PropTypes.array,
  ResultCal: PropTypes.string.isRequired,
};

export default DisplayContainer;
