export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      options: {
        maxLength: 160,
      },
    },
    // {
    //   name: "author",
    //   title: "Author",
    //   type: "reference",
    //   to: { type: "author" },
    // },
    // {
    //   name: "mainImage",
    //   title: "Main image",
    //   type: "image",
    //   fields: [
    //     {
    //       name: "alt",
    //       title: "Alt",
    //       type: "string",
    //     },
    //   ],
    // },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'category' } }]
    // },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      // author: 'author.name',
      // media: 'mainImage'
    },
    prepare(selection) {
      // const { author } = selection
      return Object.assign({}, selection, {
        subtitle: `by Julian Vila`,
      });
    },
  },
};
