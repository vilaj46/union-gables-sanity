import React from "react";

import GlobalStyle from "../../../../@core/styles/theme.default";

import { DarkenSlider } from "../DarkenSlider";
import { createDarkenSliderList } from "./utilities";

export const Preview = (props) => {
  const { value } = props;
  const { bnb, slider } = value;

  const { Theme, Fonts } = GlobalStyle;

  try {
    const previewList = createDarkenSliderList(slider);
    const { long } = previewList[0];
    return (
      <Theme>
        <Fonts />
        <DarkenSlider bnb={bnb} list={previewList} long={long} />
      </Theme>
    );
  } catch {
    return (
      <Theme>
        <Fonts />
        <DarkenSlider bnb={bnb} list={[]} />
      </Theme>
    );
  }
};
