import React from "react";

// Components
import Center from "../components/Center";
import Emphasis from "../components/Emphasis";
import Paragraph from "../components/MUI/Paragraph";
import CustomLink from "../components/CustomLink";

// Schemas
import hrSchema from "../components/HR/cms/schema";
import slideShowSchema from "../components/SlideShow/cms/schema";
import darkenSliderSchema from "../components/DarkenSlider/cms/schema";
import redBallLinksSchema from "../components/RedBallLinks/cms/schema";
import redBallSchema from "../components/RedBallLinks/components/cms/schema";
import tripAdvisorSchema from "../components/TripAdvisor/cms/schema";
import youtubeSchema from "../components/Youtube/cms/schema";
import bookNowButtonSchema from "../components/BookNowButton/cms/schema";

// Mui Schemas
import carouselSchema from "../components/MUI/Carousel/cms/schema";
import textCarouselSchema from "../components/MUI/TextCarousel/cms/schema";
import doubleImagesSchema from "../components/MUI/DoubleImage/cms/schema";
import sideBySideCarouselScehma from "../components/MUI/SideBySideCarousel/cms/schema";
import amenitiesSchema from "../components/MUI/Amenities/cms/schema";

// New Schemas
import imagesSchema from "../@core/components/Images/cms/schema";
import pageTitlesSchema from "../@core/components/PageTitles/cms/schema";

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    // New Schemas
    pageTitlesSchema,
    imagesSchema,
    // MUI Schemas
    carouselSchema,
    textCarouselSchema,
    doubleImagesSchema,
    sideBySideCarouselScehma,
    amenitiesSchema,
    // Regular Schemas
    hrSchema,
    slideShowSchema,
    redBallLinksSchema,
    redBallSchema,
    darkenSliderSchema,
    tripAdvisorSchema,
    youtubeSchema,
    bookNowButtonSchema,
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {
          title: "Normal",
          value: "normal",
          blockEditor: {
            render: Paragraph,
          },
        },
        {
          title: "Center",
          value: "center",
          blockEditor: {
            render: Center,
          },
        },
        {
          title: "EM",
          value: "em",
          blockEditor: {
            render: Emphasis,
          },
        },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            blockEditor: {
              render: CustomLink,
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "string",
              },
            ],
          },
        ],
      },
    },
  ],
};
