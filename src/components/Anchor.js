import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {colors} from '../utils/CSS/cssColors'
import {measurements } from '../utils/CSS/cssMeasurements'

const StyledAnchor = styled.a`
  /* primary 
  colors and behaviour are defined 
  in cssTypo.js */

  ${props =>
  props.isFooter &&
  css`
      margin-left: ${measurements.gridEmUnits.colGap};
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 0;
      color: ${colors.interact.anchor.linkSecondary};

      &:active,
      &:hover,
      &:visited,
      &focus {
        color: ${colors.interact.anchor.linkSecondary};
      }
    `}

  ${props =>
  props.isLinkBox &&
  css`
      display: 'table';
      border-spacing: ${measurements.gridEmUnits.rowGap};
    `}
`;

const StyledAccordionAnchor = styled.a`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  padding: 0;
  &,
  &:hover {
    text-decoration: none;
  }
  &:focus {
    outline: 0;
  }
`;

export const AccordionAnchor = ({ children, toggleItem }) => {
  return (
    <StyledAccordionAnchor onClick={toggleItem}>
      {children}
    </StyledAccordionAnchor>
  );
};

export const Anchor = ({ href, tooltip, isFooter, isLinkBox, children }) => {
  return (
    <StyledAnchor
      href={href}
      title={tooltip}
      isFooter={isFooter}
      isLinkBox={isLinkBox}
    >
      {children}
    </StyledAnchor>
  );
};

AccordionAnchor.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  toggleItem: PropTypes.func.isRequired,
};

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  isFooter: PropTypes.bool,
  isLinkBox: PropTypes.bool,
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
