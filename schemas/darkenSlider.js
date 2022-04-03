// import React from 'react'

// import DarkenSlider from '../Components/DarkenSlider/DarkenSlider'
// import urlFor from '../clientUtils/urlFor'

// export default {
//   title: 'Darken Slider',
//   name: 'darkenSlider',
//   type: 'object',
//   fields: [
//     {
//       title: 'List',
//       name: 'darken_slider',
//       type: 'array',
//       of: [
//         {
//           name: 'image',
//           type: 'image',
//           fields: [
//             {
//               name: 'Component',
//               title: 'Component',
//               type: 'string',
//               initialValue: 'span',
//               readOnly: true,
//               hidden: true,
//             },
//             {
//               name: 'alt',
//               title: 'Alt',
//               type: 'string'
//             },
//             {
//               name: 'mainText',
//               title: 'Main Text',
//               type: 'string'
//             },
//             {
//               name: 'slideText',
//               title: 'Slide Text',
//               type: 'string'
//             },
//             {
//               name: 'buttonText',
//               title: 'Button Text',
//               type: 'string'
//             },
//             {
//               name: 'href',
//               title: 'Href',
//               type: 'string'
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   preview: {
//     select: {
//       slider: 'darken_slider'
//     },
//     prepare(selection) {
//       const { slider } = selection
//       return { slider }
//     },
//     component: Preview
//   }
// }

// function Preview(props) {
//   const { value } = props
//   const { slider } = value
//   const previewList = createList(slider)
//   return <DarkenSlider list={previewList} />
// }

// function createList(list = []) {
//   return list.map(item => {
//     const { alt, href, buttonText, mainText, slideText, Component } = item
//     const image = urlFor(item)
//     const { src } = image
//     return {
//       Component,
//       src,
//       alt,
//       href,
//       buttonText,
//       mainText,
//       slideText
//     }
//   })
// }
