import React from "react";
import styled from "styled-components";

import { Container } from "./Container";

import Styles from "../styles/theme.default";

const { Theme } = Styles;

const EmphasisElement = styled.em`
  color: ${({ theme: { colors } }) => colors.lightBlack};
  display: block;
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  font-style: italic;
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
  margin: 0 auto;
  padding-bottom: 48px;
  text-align: center;
`;

export const Emphasis = ({ children, fullScreen = false }) => {
  if (fullScreen) {
    // Not implemented yet.
    return (
      <Theme>
        <EmphasisElement>{children}</EmphasisElement>
      </Theme>
    );
  } else {
    return (
      <Theme>
        <Container>
          <EmphasisElement>{children}</EmphasisElement>
        </Container>
      </Theme>
    );
  }
};
