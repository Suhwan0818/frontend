import React from 'react';
import PropTypes from 'prop-types';
import ButtonPresenter from '../Presenter/ButtonPresenter';

function ButtonContainer({color, contents, calculateFunc}) {
  return (
    <ButtonPresenter color={color} onClick={calculateFunc} value={contents}>
      {contents}
    </ButtonPresenter>
  );
}

ButtonContainer.propTypes = {
  color: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  calculateFunc: PropTypes.func.isRequired,
};

export default ButtonContainer;
