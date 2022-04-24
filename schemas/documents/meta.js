export default {
  name: "meta",
  title: "Meta",
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
};
