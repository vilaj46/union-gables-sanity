import { Preview } from "./Preview";

export default {
  title: "Links Columns",
  name: "columnOfLinks",
  type: "object",
  fields: [
    {
      title: "List",
      name: "columnOfLinks",
      type: "array",
      of: [
        {
          title: "Item",
          name: "item",
          type: "object",
          fields: [
            {
              title: "Text",
              name: "text",
              type: "string",
            },
            {
              title: "URL",
              name: "url",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "bnb",
      description: "What color the text will be.",
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
      list: "columnOfLinks",
    },
    prepare(selection) {
      const { list } = selection;
      const links = createLinkObjects(list);
      return {
        // title: 'Red Ball Links',
        links: links,
      };
    },
    component: Preview,
  },
};

function createLinkObjects(arr) {
  return arr.map((l) => {
    return { text: l.text, href: l.url };
  });
}
