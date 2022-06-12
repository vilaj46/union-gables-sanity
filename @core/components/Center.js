import React from "react";
import styled from "styled-components";

import { Container } from "./Container";

import Styles from "../styles/theme.default";

const { Theme } = Styles;

const CenterElement = styled.span`
  color: ${({ theme: { colors } }) => colors.lightBlack};
  display: block;
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Center = ({ children, fullScreen = false }) => {
  if (fullScreen) {
    // Not implemented yet.
    <Theme>
      <CenterElement>{children}</CenterElement>
    </Theme>;
  }
  return (
    <Theme>
      <Container>
        <CenterElement>{children}</CenterElement>
      </Container>
    </Theme>
  );
};
