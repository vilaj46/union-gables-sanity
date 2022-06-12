import { Preview } from "./Preview.js";

export default {
  title: "Darken Slider",
  name: "darkenSlider",
  type: "object",
  fields: [
    {
      title: "List",
      name: "darken_slider",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
            {
              name: "mainText",
              title: "Main Text",
              type: "string",
            },
            {
              name: "slideText",
              title: "Slide Text",
              type: "string",
            },
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
            },
            {
              name: "href",
              title: "Href",
              type: "string",
            },
            {
              name: "long",
              title: "Long",
              type: "boolean",
              initialValue: false,
            },
            {
              name: "Component",
              title: "Component",
              type: "string",
              initialValue: "span",
              readOnly: true,
              hidden: true,
            },
          ],
        },
      ],
    },
    {
      name: "bnb",
      description: "What color the text and outline will be.",
      title: "BNB",
      type: "string",
      options: {
        list: ["Union Gables", "Brunswick"],
      },
      initialValue: "Union Gables",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      bnb: "bnb",
      slider: "darken_slider",
    },
    prepare(selection) {
      const { bnb, slider } = selection;
      return { bnb, slider };
    },
    component: Preview,
  },
};
