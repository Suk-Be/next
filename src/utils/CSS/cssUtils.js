import { css } from 'styled-components';
import { colors } from './cssColors';
import { bp } from './cssBreakpoints';
import { measurements } from './cssMeasurements';

export const fluidCSS = (
  cssRule,
  minSize,
  maxSize,
  breakpointSize = bp.small,
  completeViewPortSize = measurements.completeViewPortSize,
  startRelevantVieportSize = measurements.startRelevantViewPortSize,
  endRelevantVieportSize = measurements.endRelevantViewPortSize
) => {
  return `
  ${cssRule}: ${minSize}px;
  
  @media (min-width: ${breakpointSize}) {
    ${cssRule}: calc(
      ${minSize}px +
        (${maxSize} - ${minSize}) *
        (
          (${completeViewPortSize} - ${breakpointSize}) /
            (${endRelevantVieportSize} - ${startRelevantVieportSize})
        )
    );
  }
`;
};

export const utils = css`
  input::placeholder {
    color: ${colors.interact.input.placeholder};
  }
`;

export const isRowPair = `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: ${measurements.gridEmUnits.rowGap};
  grid-column-gap: ${measurements.gridEmUnits.rowGap};
`;

export const isVisuallyHidden = `
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
`;

// Buttons
export const fluidButton = `
  background: ${colors.background.tertiary};
  border-color: ${colors.interact.buttons.tertiary.normalBorder};
  color: ${colors.interact.buttons.tertiary.normalBorder};
  &:hover {
    border-color: ${colors.interact.buttons.tertiary.hoverBorder};
    color: ${colors.interact.buttons.tertiary.hoverBorder};
  }
  &:focus {
    border-color: ${colors.interact.buttons.tertiary.focusBorder};
    color: ${colors.interact.buttons.tertiary.focusBorder};
  }
  &:active {
    border-color: ${colors.interact.buttons.tertiary.activeBorder};
    color: ${colors.interact.buttons.tertiary.activeBorder};
  }
`;

export const styledButton = css`
  ${fluidButton}
  border: 1.5px solid;
  font-size: 100%;
  &:focus {
    outline: none;
    outline-offset: 0;
  }
  padding: ${measurements.buttonPaddingEMUnits.general};
  margin-bottom: ${measurements.gridEmUnits.rowGap};
`;

export const resetButton = `
  background: ${colors.background.tertiary};
  border-color: ${colors.interact.buttons.tertiary.normalBorder};
  color: ${colors.interact.buttons.tertiary.normalBorder};
  &:hover {
    border-color: ${colors.interact.buttons.tertiary.hoverBorder};
    color: ${colors.interact.buttons.tertiary.hoverBorder};
  }
  &:focus {
    border-color: ${colors.interact.buttons.tertiary.focusBorder};
    color: ${colors.interact.buttons.tertiary.focusBorder};
  }
  &:active {
    border-color: ${colors.interact.buttons.tertiary.activeBorder};
    color: ${colors.interact.buttons.tertiary.activeBorder};
  }
`;

export const changeAmmountButton = `
  background: ${colors.interact.buttons.primary.normal};
  border-color: ${colors.interact.buttons.primary.normal};
  color: ${colors.text.secondary};
  &:hover {
    background: ${colors.interact.buttons.primary.hover};
    border-color: ${colors.interact.buttons.primary.hover};
    color: ${colors.text.secondary};
  }
  &:focus,
  &:focus-within {
    background: ${colors.interact.buttons.primary.focus};
    border-color: ${colors.interact.buttons.primary.focus};
    color: ${colors.text.secondary};
  }
  &:active {
    background: ${colors.interact.buttons.primary.active};
    border-color: ${colors.interact.buttons.primary.active};
    color: ${colors.text.secondary};
  }
`;

export const submitButton = `
  background: ${colors.interact.buttons.secondary.normal};
  border-color: ${colors.interact.buttons.secondary.normal};
  color: ${colors.text.secondary};
  &:hover {
    background: ${colors.interact.buttons.secondary.hover};
    border-color: ${colors.interact.buttons.secondary.hover};
  }
  &:focus,
  &:focus-within {
    background: ${colors.interact.buttons.secondary.focus};
    border-color: ${colors.interact.buttons.secondary.focus};
  }
  &:active {
    background: ${colors.interact.buttons.secondary.active};
    border-color: ${colors.interact.buttons.secondary.active};
  }
`;

export const grid = `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: ${measurements.gridEmUnits.colGap};
  grid-row-gap: ${measurements.gridEmUnits.rowGap};
  
  padding-top: 105px;
  padding-right: ${measurements.gridEmUnits.colGap};
  padding-bottom: 90px;
  padding-left: ${measurements.gridEmUnits.colGap};

  @media (min-width: ${bp.large}) {
    padding: 
      calc(115px + (135 - 115) * (
        (100vw - ${bp.large}) /
          (
            ${measurements.endViewPortRange} -
              ${measurements.startViewPortRange}
          )
        )
      )
      calc(15px + (12.5 - 10) * (
        (100vw - ${bp.large}) /
          (
            ${measurements.endViewPortRange} -
              ${measurements.startViewPortRange}
          )
        )
      )
      calc(
        95px + (55 - 45) *
          (
            (100vw - ${bp.large}) /
              (
                ${measurements.endViewPortRange} -
                  ${measurements.startViewPortRange}
              )
          )
      )
      calc(15px + (12.5 - 10) * (
        (100vw - ${bp.large}) /
          (
            ${measurements.endViewPortRange} -
              ${measurements.startViewPortRange}
          )
        )
      )
    ;
    grid-column-gap: calc(
      15px + (12.5 - 10) *
        (
          (100vw - ${bp.large}) /
            (
              ${measurements.endViewPortRange} -
                ${measurements.startViewPortRange}
            )
        )
    );
  }
`;

export const gridBreakpoints = `
  @media (min-width: ${bp.medium}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  @media (min-width: ${bp.large}) {
    grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
  }

  @media (min-width: ${bp.epicLarge}) {
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }
`;

export const experimentalBackgroundYingYang = `
  radial-gradient(
            circle at 50% 59%,
            ${colors.background.primary} 3%,
            ${colors.text.primaryHeadline} 4%,
            ${colors.text.primaryHeadline} 11%,
            rgba(54, 78, 39, 0) 12%,
            rgba(54, 78, 39, 0)
          )
          50px 0,
        radial-gradient(
            circle at 50% 41%,
            ${colors.text.primaryHeadline} 3%,
            ${colors.background.primary} 4%,
            ${colors.background.primary} 11%,
            rgba(210, 202, 171, 0) 12%,
            rgba(210, 202, 171, 0)
          )
          50px 0,
        radial-gradient(
            circle at 50% 59%,
            ${colors.background.primary} 3%,
            ${colors.text.primaryHeadline} 4%,
            ${colors.text.primaryHeadline} 11%,
            rgba(54, 78, 39, 0) 12%,
            rgba(54, 78, 39, 0)
          )
          0 50px,
        radial-gradient(
            circle at 50% 41%,
            ${colors.text.primaryHeadline} 3%,
            ${colors.background.primary} 4%,
            ${colors.background.primary} 11%,
            rgba(210, 202, 171, 0) 12%,
            rgba(210, 202, 171, 0)
          )
          0 50px,
        radial-gradient(
          circle at 100% 50%,
          ${colors.background.primary} 16%,
          rgba(210, 202, 171, 0) 17%
        ),
        radial-gradient(
          circle at 0% 50%,
          ${colors.text.primaryHeadline} 16%,
          rgba(54, 78, 39, 0) 17%
        ),
        radial-gradient(
            circle at 100% 50%,
            ${colors.background.primary} 16%,
            rgba(210, 202, 171, 0) 17%
          )
          50px 50px,
        radial-gradient(
            circle at 0% 50%,
            ${colors.text.primaryHeadline} 16%,
            rgba(54, 78, 39, 0) 17%
          )
          50px 50px;
      background-color: ${colors.interact.buttons.primary.normal};
      background-size: 100px 100px;
      margin: 0 auto;
      border-radius: 7px;
`;

export const gradientBackground = `
  ${colors.background.linearGradient}
`;
