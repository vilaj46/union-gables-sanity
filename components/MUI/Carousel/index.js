import React from "react";
import styled from "styled-components";
import { Paper, Button, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import device from "../../../styles/device";

import sampleData from "./data";

const ImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 250px;
  z-index: 30;

  @media (${device.mobileL}) {
    height: 350px;
  }
  @media (${device.tablet}) {
    height: 550px;
  }
  @media (${device.laptop}) {
    height: 650px;
  }
  @media (${device.laptop}) {
    height: 750px;
  }
  @media (${device.desktop}) {
    height: 80vh;
    object-fit: cover;
  }
`;

function CustomCarousel({ images = sampleData }) {
  return (
    <div>
      <Carousel>
        {images.map((img) => {
          return (
            <ImageContainer key={img.src + img.alt}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                }}
                component="img"
                alt={img.alt}
                src={img.src}
              />
            </ImageContainer>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
