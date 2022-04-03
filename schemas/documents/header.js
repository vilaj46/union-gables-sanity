import React from "react";

import Navbar from "../../components/Navbar";

export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "href",
              title: "Href",
              type: "string",
            },
            {
              name: "dropdown",
              title: "Dropdown",
              type: "array",
              of: [
                {
                  label: "link",
                  title: "Link",
                  type: "object",
                  fields: [
                    {
                      name: "label",
                      title: "Label",
                      type: "string",
                    },
                    {
                      name: "href",
                      title: "Href",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      links: "links",
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        subtitle: `by Julian Vila`,
        links: selection.links,
      });
    },
    component: () => HeaderPreview,
  },
};

function HeaderPreview(props) {
  return <span>HEader Prev</span>;
}
