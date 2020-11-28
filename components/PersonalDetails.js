import React from 'react'
import image from '../assets/socrate.jpg'
import styled from 'styled-components'
import details from '../data/personalData'

const StyledPersonalDetails = styled.div`
  background-color : #ccc;
  span {
    display : block;
  }
`

export default function PersonalDetails() {
  const content = () => {
    return (
      <>
        <StyledPersonalDetails>
          <div>
            <img src={image} alt="my image" />
          </div>
          <div>
            <span>{details.firstName} { details.lastName }</span>
            <span>{ details.background }</span>
          </div>
          <div className="contact">
            {details.contact.map((el, index) => <p key={index}>{ el }</p>)}
          </div>
          <div>{ details.descrition }</div>
        </StyledPersonalDetails>
      </>
    )
  }
  return (
    <div>
      {content()}
    </div>
  )
}
