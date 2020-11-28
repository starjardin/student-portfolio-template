import React from 'react'
import image from '../assets/socrate.jpg'
import details from '../data/personalData'
import StyledPersonalDetails from './styles/StyledPersonalDetails'

export default function PersonalDetails() {
  const content = (details) => {
    return (
      <>
        <StyledPersonalDetails>
          <div className="personal__image">
            <img src={image} alt="my image" />
          </div>
          <div className="personal__about">
            <div className="name">
              <span>{details.firstName} { details.lastName }</span>
              <span>{ details.background }</span>
            </div>
            <div className="contact">
              {details.contact.map((el, index) => <p key={index}>{ el }</p>)}
            </div>
          </div>
          <div className="personal__desc">
            {details.descrition}
          </div>
        </StyledPersonalDetails>
      </>
    )
  }
  return (
    <div>
      {content(details)}
    </div>
  )
}


