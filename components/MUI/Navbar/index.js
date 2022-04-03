import React from "react";
import Container from "@mui/material/Container";

// Components
import Carousel from "../Carousel";
import RegularNavbar from "./RegularNavbar";

// Sample Data
import sampleData from "./data";

// Sample Link
import SampleLink from "./cms/SampleLink";

function Navbar({ links = sampleData, LinkComponent = SampleLink }) {
  return (
    <div>
      <Carousel />
      <Container>
        <RegularNavbar links={links} LinkComponent={LinkComponent} />
      </Container>
    </div>
  );
}

export default Navbar;
