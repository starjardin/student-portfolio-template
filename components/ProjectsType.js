import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import projectsData from '../data/porjectsData'
import Projects from './Projects'

const ProjectsTypeStyle = styled.div`
  background-color : #fff;
  margin : 1rem 0;
  padding : 1rem;
  button {
    display : inline-block;
    margin : 1rem 1rem 1rem 0;
    padding : 0.5 1rem;
    background-color :  #ff8906;
    cursor : pointer;
    transition : 0.3s;
    border : 1px solid #ffeeff;
    border-radius : 4px;
    box-shadow : 1px 1px 1px 2px #ccc;
  }

  button:focus,
  button:hover {
    background-color :  #0000ff;
    border : none;
    outline : none;
    border-radius : 4px;
    color : #fff;
  }

  button:hover {
    background-color :  #8967ff;
    transform : scale(1.1)
  }
`

export default function ProjectsType() {
  const [projects, setProjects] = useState([])
  const [filtereProject, setFilteredProject] = useState(projects)

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  useEffect(() => {
    setFilteredProject(projects)
  }, [projects])

  if (!projects.length) return null

  function projectFilter(type) {
    setFilteredProject(projects.filter(project => project.tools === type))
  }
  
  return (
    <>
      <ProjectsTypeStyle>
        <h3>Projects</h3>
        <button onClick={() => projectFilter("html")}>Html css</button>
        <button onClick={() => projectFilter("javascript")}>Javascript</button>
        <button onClick={() => projectFilter("react")}>React</button>
      </ProjectsTypeStyle>
      <Projects projects={ filtereProject }/>
    </>
  )
}
