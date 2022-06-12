import React from "react";
import styled from "styled-components";

import { Container } from "./Container";

import Styles from "../styles/theme.default";

const { Theme } = Styles;

const Paragraph = styled.p`
  color: ${({ theme: { colors } }) => colors.lightBlack};
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
`;

export const PageParagraph = ({ children, fullScreen = false }) => {
  if (fullScreen) {
    // Not implemented yet.
    return (
      <Theme>
        <Paragraph>{children}</Paragraph>
      </Theme>
    );
  } else {
    return (
      <Theme>
        <Container>
          <Paragraph>{children}</Paragraph>
        </Container>
      </Theme>
    );
  }
};
