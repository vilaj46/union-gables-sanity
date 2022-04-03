import urlFor from '../../../clientUtils/urlFor'

function createDarkenSliderList(list = []) {
  return list.map((item) => {
    const {alt, href, buttonText, mainText, slideText, Component, long} = item
    const image = urlFor(item)
    const {src} = image
    return {
      Component,
      src,
      alt,
      href,
      buttonText,
      mainText,
      slideText,
      long,
    }
  })
}

export default createDarkenSliderList
