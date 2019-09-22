import { keyframes } from 'styled-components';
import { spacings } from 'config/styles';

const PopIn = keyframes`
  0% {
    transform: translate(50%, 0);
  }
  100% {
    transform: translate(50%,-${spacings.small});
  }
`;

export default PopIn;
