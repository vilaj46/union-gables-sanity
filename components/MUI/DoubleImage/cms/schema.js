import React from "react";

export default {
  title: "Double Images",
  name: "doubleImages",
  type: "object",
  fields: [
    {
      title: "Images",
      name: "images",
      type: "object",
      fields: [
        {
          name: "imageOne",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
        {
          name: "imageTwo",
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
    },
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare(selection) {
      const { images = {} } = selection;
      console.log(selection);
      return { images };
    },
    component: () => <span>HEY</span>,
  },
};
