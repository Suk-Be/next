import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/CSS/cssColors'
import { measurements } from '../utils/CSS/cssMeasurements'
import {fluidCSS} from '../utils/CSS/cssUtils'
import { Span } from './GenericTags'
import { AppName } from './AppName'
import { DWLogo } from './DWLogo'

const fluidHeaderHeight = fluidCSS(
  'height',
  measurements.header.baseHeightMin,
  measurements.header.baseHeightMax
);

const Header = styled.header`
  background: ${colors.background.linearGradient};
  width: ${measurements.header.width};
  ${fluidHeaderHeight}
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  border-bottom: ${measurements.gridEmUnits.bottom} solid
    ${colors.text.secondary};
`;

export const HeaderComponent = () => {
  return (
    <Header>
      <Span isHeaderContainer>
        <Span isLogo>
          <DWLogo />
        </Span>
        <AppName isAppName>
          Slideshow App
        </AppName>
      </Span>
    </Header>
  )
}
