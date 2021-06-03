import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/CSS/cssColors'
import { measurements } from '../utils/CSS/cssMeasurements'
import {fluidCSS} from '../utils/CSS/cssUtils'
import {Anchor} from './Anchor'

const fluidFooterHeight = fluidCSS(
  'height',
  measurements.footer.baseHeightMin,
  measurements.footer.baseHeightMax
);

const Footer = styled.footer`
  background-color: ${colors.background.secondary};
  color: ${colors.text.secondary};
  width: ${measurements.footer.width};
  ${fluidFooterHeight}
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: ${measurements.gridEmUnits.bottom} solid ${colors.text.secondary};
`;

export const FooterComponent = () => (
  <Footer>
    <Anchor href="https://dw.com" tooltip="Deutsche Welle" isFooter>
      &copy; Deutsche Welle
    </Anchor>
  </Footer>
);