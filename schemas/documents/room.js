export default {
  name: "room",
  title: "Room",
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
      initialValue: "/rooms/",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      options: {
        maxLength: 160,
      },
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
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        subtitle: `by Julian Vila`,
      });
    },
  },
};
