import styled, { keyframes } from 'styled-components';
import { colors, lightColors, spacings } from 'config/styles.js';

export const PopIn = keyframes`
  0% {
    transform: translate(50%, 0);
  }
  100% {
    transform: translate(50%,-${spacings.small});
  }
`;