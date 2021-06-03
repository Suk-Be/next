import { css } from 'styled-components';
import { colors } from './cssColors';
import { fluidCSS } from './cssUtils';

export const typoConfig = {
  baseFont: 'Noto Sans',
  fontRegular: '400',
  fontBold: '700',
  headlineFont: 'DWTheAntiquaB',
  subHeadlineFont: 'DWTheAntiquaB',
  baseFontSizeBodyMin: '16',
  baseFontSizeBodyMax: '20',
  baseHeadlineSizeMin: '24',
  baseHeadlineSizeMax: '30',
  baseLineHeight: '1.3',
};

export const flexFontSizeBase = fluidCSS(
  'font-size',
  typoConfig.baseFontSizeBodyMin,
  typoConfig.baseFontSizeBodyMax
);

export const flexFontSizeHeadline = fluidCSS(
  'font-size',
  typoConfig.baseHeadlineSizeMin,
  typoConfig.baseHeadlineSizeMax
);

export const typo = css`
  /* Macro Typography */

  body {
    font-family: ${typoConfig.baseFont};
    line-height: ${typoConfig.baseLineHeight};
    font-weight: ${typoConfig.fontRegular};
    color: ${colors.text.primary};
    text-rendering: optimizeLegibility;

    ${flexFontSizeBase}
  }

  h1, h2, h3 {
    font-family: ${typoConfig.headlineFont};
    color: ${colors.text.primaryHeadline};
    font-weight: bold;

    ${flexFontSizeHeadline}
  }

  h2,
  h3 {
    font-weight: ${typoConfig.fontBold};
  }

  a {
    color: ${colors.interact.anchor.linkPrimary};
    &:active,
    &:hover,
    &:visited,
    &focus {
      ${colors.interact.anchor.linkPrimary};
    }
  }
  label {
    font-family: ${typoConfig.baseFont};
    font-weight: ${typoConfig.fontBold};
  }
  button {
    font-family: ${typoConfig.baseFont};
  }
`;
