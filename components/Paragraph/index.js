import React from 'react'
import styled from 'styled-components'

import fontStyles from '../../styles/fonts/fontStyles'

const FontStyles = fontStyles[0]
const Theme = fontStyles[1]

const Container = styled.p`
  color: ${({ theme: { colors } }) => colors.lightBlack};
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
`

export function Paragraph({ children }) {
  return (
    <Theme>
      <FontStyles />
      <Container>{children}</Container>
    </Theme>
  )
}

export default Paragraph
