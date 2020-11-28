import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  color : #fffffe;
  padding-block : 1rem;
`

export default function Header() {
  return (
    <StyledHeader>
      Hello world
    </StyledHeader>
  )
}
