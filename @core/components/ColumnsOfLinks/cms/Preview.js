import React from "react";

import { ColumnsOfLinks } from "../ColumnsOfLinks";

export const Preview = (props) => {
  return <ColumnsOfLinks links={props.value.links} />;
};
