import React from 'react';
import PropTypes from 'prop-types';
import ControlPresenter from '../Presenter/ControlPresenter';
import ButtonContainer from './ButtonContainer';

function ControlContainer({calculateFunc}) {
  return (
    <ControlPresenter>
      <ButtonContainer
        color="mediumGrey"
        contents="C"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="mediumGrey"
        contents="+/-"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="mediumGrey"
        contents="%"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="mediumOrange"
        contents="/"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="7"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="8"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="9"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightOrange"
        contents="x"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="4"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="5"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="6"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightOrange"
        contents="-"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="3"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="2"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="1"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightOrange"
        contents="+"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="0"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="."
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightGrey"
        contents="Del"
        calculateFunc={calculateFunc}
      />
      <ButtonContainer
        color="lightOrange"
        contents="="
        calculateFunc={calculateFunc}
      />
    </ControlPresenter>
  );
}

ControlContainer.propTypes = {
  calculateFunc: PropTypes.func.isRequired,
};

export default React.memo(ControlContainer);
