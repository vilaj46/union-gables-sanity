import React from 'react'

function getParagraphChildren(props) {
  //   const newChildren = props.children.map((child) => {
  //     if (typeof child === "string") {
  //       return child;
  //     } else {
  //       // Type is an object
  //       const { node } = child.props;
  //       const { mark } = node;
  //       const { _type } = mark;
  //       const text = node.children[0];

  //       if (_type === "link") {
  //         const { href } = mark;
  //         const location = hrefLocation(href);
  //         if (location === "foreign") {
  //           return (
  //             <CustomLink href={href} key={href + text + randNumber()}>
  //               {text}
  //             </CustomLink>
  //           );
  //         } else {
  //           return (
  //             <CustomLink
  //               Component={Link}
  //               href={href}
  //               key={href + text + randNumber()}
  //             >
  //               {text}
  //             </CustomLink>
  //           );
  //         }
  //       } else {
  //         return <span>FILL IN SOMETHING HERE! -- {text}</span>;
  //       }
  //     }
  //   });
  //   return newChildren;
  return []
}

// function hrefLocation(href) {
//   const trimmed = href.trim();
//   if (trimmed[0] === "/") {
//     return "domestic";
//   } else {
//     return "foreign";
//   }
// }

// function randNumber() {
//   return Math.random(1000000000);
// }

export default getParagraphChildren
