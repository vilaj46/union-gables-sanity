import React from 'react'
import styled from 'styled-components'

import divideLinksEvenly from './utilities/divideLinksEvenly'

// Components
import RedLinkColumn from './components/RedLinkColumn'

// Utilities
import getRandomKey from '../../clientUtils/getRandomKey'

const defaultLinks = [
  {
    text: 'Congress Park',
    href: 'https://uniongablesinnus.smartweb-04.bookassist.com/en/',
  },
  {
    text: 'Saratoga Race Course',
    href: 'https://uniongablesinnus.smartweb-04.bookassist.com/en/',
  },
  {
    text: 'Performing Arts Center',
    href: 'https://uniongablesinnus.smartweb-04.bookassist.com/en/',
  },
  {
    text: 'Springs City Center',
    href: 'https://uniongablesinnus.smartweb-04.bookassist.com/en/',
  },
  {
    text: 'Spa State Park',
    href: 'https://uniongablesinnus.smartweb-04.bookassist.com/en/',
  },
  {
    text: 'Annual Festivals and Events',
    href: 'https://uniongablesinnus.smartweb-04.bookassist.com/en/',
  },
]

const Container = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 3.5rem;
`

function RedBallLinks({links = defaultLinks, randomKey = undefined}) {
  const splitLinks = divideLinksEvenly(links)
  if (links.length > 0) {
    return (
      <Container>
        {splitLinks.map((split) => {
          return <RedLinkColumn links={split} key={randomKey || getRandomKey()} />
        })}
      </Container>
    )
  } else {
    return <Container>Red Balls loading...</Container>
  }
}

export default RedBallLinks
