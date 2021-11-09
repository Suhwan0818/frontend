import styled from 'styled-components';

const Display = styled.div`
  width: 100%;
  height: 30%;
  border-radius: 0.75rem 0.75rem 0 0;
  background-color: ${props => props.theme.Colors.displayColor};
  padding-bottom: 1rem;
`;

const CurrentCal = styled.div`
  height: 2rem;
  width: 95%;
  text-align: right;
  padding-top: 10%;
  color: ${props => props.theme.Colors.transparentWhite};
  font-size: 2rem;
`;

const ResultCal = styled.div`
  height: 3rem;
  width: 95%;
  text-align: right;
  padding-top: 5%;
  color: ${props => props.theme.Colors.lightGrey};
  font-size: 3rem;
`;

export {Display, CurrentCal, ResultCal};
