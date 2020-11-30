import React from 'react'
import styled from 'styled-components'

const skills = [
  {
    skill: "Markdwn",
    value : 30
  },
  {
    skill: "Html5",
    value : 36
  },
  {
    skill: "css3",
    value : 60
  },
  {
    skill: "javascript",
    value : 24
  },
  {
    skill: "react",
    value : 70
  }
]

const SkillsStyled = styled.div`
  color : #a7a9be;
  .skills__content {
    position : relative;
    padding-block : 0.3rem;
    progress {
      position : absolute;
      left : 30%;
    }
  }
`
const SectionSkills = styled.section`
  margin-top : 2rem;
  box-shadow : 1px 1px 5px #fffffe;
  max-width : 450px;
  padding : 1rem;
  h3 {
    color : #fffffe;
    padding-block : 0.5em;
  }
`

export default function Skills() {
  return (
    <SectionSkills>
      <header>
        <h3>Front-end</h3>
      </header>
      <SkillsStyled>
        {skills.map((skill, index) => (
          <div className="skills__content" key={index}>
            <label htmlFor={skill.skill}>{ skill.skill}</label>
            <progress
              id={skill.skill}
              max="100"
              value={skill.value}
            >
              {skill.value}
            </progress>
          </div>)
        )
      }
      </SkillsStyled>
    </SectionSkills>
  )
}
