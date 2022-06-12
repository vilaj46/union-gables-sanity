import React from "react";
import styled from "styled-components";

import { Ball } from "../Ball";

import { isDomesticLink } from "../../utilities/link-utils";
import { splitIntoColumns } from "../../utilities/array-utils";

import Styles from "../../styles/theme.default";

const { Theme } = Styles;

const Anchor = styled.a`
  color: ${({ theme: { colors } }) => colors.darkRed};
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    color: ${({ theme: { colors } }) => colors.red};
    cursor: pointer;
  }
`;

const Col = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

const ColItem = styled.li`
  margin: 4px 20px;
`;

const UL = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding-bottom: ${(props) => props.padding}px;
  padding-left: 0;
  padding-right: 0;
  padding-top: ${(props) => props.padding}px;
`;

const Column = ({ links }) => (
  <Col>
    {links.map((l, idx) => {
      const domestic = isDomesticLink(l.href);
      if (domestic) {
        return (
          <ColItem key={idx}>
            <Anchor>{l.text}</Anchor>
            {idx !== links.length - 1 && <Ball />}
          </ColItem>
        );
      } else {
        return (
          <ColItem key={idx}>
            <Anchor href={l.href} target="_blank">
              {l.text}
            </Anchor>
            {idx !== links.length - 1 && <Ball />}
          </ColItem>
        );
      }
    })}
  </Col>
);

export const ColumnsOfLinks = ({ links, numCol = 2, padding = 0 }) => {
  try {
    const splitLinks = splitIntoColumns(numCol, links);
    return (
      <Theme>
        <UL padding={padding}>
          {splitLinks.map((colLinks, idx) => {
            return <Column key={idx} links={colLinks} />;
          })}
        </UL>
      </Theme>
    );
  } catch {
    return (
      <Theme>
        <span>Add some links!</span>
      </Theme>
    );
  }
};
