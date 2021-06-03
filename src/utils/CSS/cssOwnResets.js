import { css } from 'styled-components';
import { colors } from './cssColors';
import { measurements } from './cssMeasurements';

export const ownReset = css`
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    background-color: ${colors.background.primary};
  }
  header,
  main,
  footer,
  h1,
  h2,
  h3,
  p,
  span,
  button,
  input,
  form,
  select {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  header,
  main,
  form,
  img {
    margin-bottom: ${measurements.gridEmUnits.rowGap};
  }
`;