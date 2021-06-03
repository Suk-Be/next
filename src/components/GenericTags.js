import React from 'react'
import styled, {css} from 'styled-components'
import { colors } from '../utils/CSS/cssColors'
import {measurements } from '../utils/CSS/cssMeasurements'
import { bp } from '../utils/CSS/cssBreakpoints'
import {fluidCSS} from '../utils/CSS/cssUtils'

// Styling Span Containers
const fluidTopGap = fluidCSS(
  'padding-top',
  30,
  30
)

const StyledSpan = styled.span`
  /* primary 
  colors and behaviour are defined 
  in cssTypo.js */

  ${props =>
  props.isLogo &&
    css`
      margin-left: ${measurements.gridEmUnits.colGap};
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 0;
    `}
    
  ${props => props.isHeaderContainer && 
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      ${fluidTopGap}
      @media (min-width: ${bp.xsmall}) {
         grid-template-columns: repeat(3, 1fr);
      }
    `}
    
   ${props => props.isSlideContainer &&
    css`
      padding: 1rem;
      height: 300px;
      background: green;
    `}
`;

const Span = ({ isLogo, isHeaderContainer, isSlideContainer, children }) => {
  return (
    <StyledSpan
      isLogo={isLogo}
      isHeaderContainer={isHeaderContainer}
      isSlideContainer={isSlideContainer}
    >
      {children}
    </StyledSpan>
  );
};


// Styling Main Container
const BaseSetting = `
  margin: 100px 0;
  text-align: center;
  height: calc(100vh - 200px);
`
const BaseGrid = `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-gap: 10px;
`
// Styling for Slider.js component
const CarouselMainNav = `
  .carousel > button {
    height: 40px;
    min-width: 80px;
    font-weight: 400;
    font-size: 0.75em;
    color: white;
    background-color: ${colors.interact.buttons.primary.normal};
    border-width: 0;
    margin: 5px;
  }
  .carousel > button:hover,
  .carousel > button:focus {
    background-color: ${colors.interact.buttons.primary.hover};
  }
  .carousel > button:active {
    background-color: ${colors.interact.buttons.primary.active};
  }
  .carousel > button:disabled {
    background-color: #a1abb4;
    color: #fff;
    cursor: default;
  }
`
const CarouselDotNav = `
  .carousel__dot-group > button {
    height: 20px;
    width: 20px;
    margin: 5px;
    border-radius: 50%;
    background-color: #96be00;
    border-width: 0;
  }
  .carousel__dot-group > button:disabled{
    background-color:  #0064b4;
    cursor: default;
  }
`
const StyledMain = styled.main`
  ${BaseSetting}
  ${BaseGrid}
  
  ${props =>
  props.isSlider &&
    css`
      .carousel {
        grid-column: 2;
        grid-row: 2;
      }
      .carousel > div[role='listbox'] {
        height: 30vh;
      }
      .carousel adress {
        font-size: 0.75em;
      }
      .carousel h1 {
        padding-top: 50px;
        padding-bottom: 20px;
      }
      ${CarouselMainNav}
      ${CarouselDotNav}
  `}
    
  ${props => props.isGame &&
    css``}
`;

const Main = ({isSlider, isGame, children}) => {
  return (
    <StyledMain
      isSlider={{isSlider}}
      isGame={{isGame}}
    >
      {children}
    </StyledMain>
  )
}

export { Span, Main }