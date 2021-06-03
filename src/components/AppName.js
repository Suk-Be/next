import React from 'react'
import styled, {css} from 'styled-components'
import { colors } from '../utils/CSS/cssColors'
import { bp } from '../utils/CSS/cssBreakpoints'

const Styledh3 = styled.h3`

  ${props =>
  props.isAppName &&
  css`
      color: ${colors.text.secondary};
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-size: 18px;
      
      @media (min-width: ${bp.small}) {
        font-size: calc( 24px + (30 - 24) * ( (100vw - 576px) / (1400 - 576) ) );
      }
  `}
`;

export const AppName = ({ isAppName, children }) => {
  return (
    <Styledh3
      isAppName={isAppName}
    >
      {children}
    </Styledh3>
  );
};