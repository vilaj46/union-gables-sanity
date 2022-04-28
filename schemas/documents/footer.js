export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "55 Union Ave, Saratoga Springs, NY 12866, United States",
    },
    {
      name: "telephone",
      title: "Telephone",
      type: "string",
      initialValue: "518-584-1558",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "stay@uniongables.com",
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "string",
      initialValue: "www.facebook.com/unionGables?",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
      initialValue: "www.twitter.com/uniongables?",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
      initialValue: "www.instagram.com/uniongables",
    },
    {
      name: "pinterest",
      title: "Pinterest",
      type: "string",
      initialValue: "www.pinterest.com/uniongables",
    },
    {
      name: "tripadvisor",
      title: "Tripadvisor",
      type: "string",
      initialValue: "www.tripadvisor.com/uniongables",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        title: selection.title,
        subtitle: `by Julian Vila`,
        // links: selection.links,
      });
    },
    // component: () => HeaderPreview,
  },
  //   fields: [
  //     {
  //       name: "data",
  //       title: "Data",
  //       type: "object",
  //       fields:
  //     },
  //   ],
};
