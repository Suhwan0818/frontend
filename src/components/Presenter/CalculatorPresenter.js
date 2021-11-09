import styled from 'styled-components';

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

export default Calculator;
