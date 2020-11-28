import React from 'react'

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

export default function Skills() {
  return (
    <div>
      {skills.map((skill, index) => (
        <div className="skills__content" key={index}>
          <label htmlFor={skill.skill}>{ skill.skill}</label>
          <progress
          id={skill.skill}
          max="100"
          value={skill.value}
        >
          {skill.value}
        </progress>)
        </div>
      ))
      }
    </div>
  )
}
