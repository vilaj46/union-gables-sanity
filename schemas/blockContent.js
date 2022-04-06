import React from "react";

// Components
import Center from "../components/Center";
import Emphasis from "../components/Emphasis";
import Paragraph from "../components/MUI/Paragraph";
import CustomLink from "../components/CustomLink";
import PageTitle from "../components/PageTitle/PageTitle";

// Schemas
import hrSchema from "../components/HR/cms/schema";
import slideShowSchema from "../components/SlideShow/cms/schema";
import darkenSliderSchema from "../components/DarkenSlider/cms/schema";
import redBallLinksSchema from "../components/RedBallLinks/cms/schema";
import redBallSchema from "../components/RedBallLinks/components/cms/schema";
import tripAdvisorSchema from "../components/TripAdvisor/cms/schema";
import youtubeSchema from "../components/Youtube/cms/schema";

// Mui Schemas
import carouselSchema from "../components/MUI/Carousel/cms/schema";
import textCarouselSchema from "../components/MUI/TextCarousel/cms/schema";
import doubleImagesSchema from "../components/MUI/DoubleImage/cms/schema";

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    // MUI Schemas
    carouselSchema,
    textCarouselSchema,
    doubleImagesSchema,
    // Regular Schemas
    hrSchema,
    slideShowSchema,
    redBallLinksSchema,
    redBallSchema,
    darkenSliderSchema,
    tripAdvisorSchema,
    youtubeSchema,
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
        {
          title: "H1",
          value: "h1",
          blockEditor: {
            render: ({ children }) => {
              return <PageTitle header={1}>{children}</PageTitle>;
            },
          },
        },
        {
          title: "H2",
          value: "h2",
          blockEditor: {
            render: ({ children }) => {
              return <PageTitle header={2}>{children}</PageTitle>;
            },
          },
        },
        {
          title: "H3",
          value: "h3",
          blockEditor: {
            render: ({ children }) => {
              return <PageTitle header={3}>{children}</PageTitle>;
            },
          },
        },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
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
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};
