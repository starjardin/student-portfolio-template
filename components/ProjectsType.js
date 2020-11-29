import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import projectsData from '../data/porjectsData'
import Projects from './Projects'

const ProjectsTypeStyle = styled.div`
  background-color : #fff;
  margin : 1rem 0;
  a {
    display : inline-block;
    margin : 1rem 1rem 1rem 0;
    padding : 0 0.5rem;
    background-color : #0000ff;
  }
`

export default function ProjectsType() {
  const [projects, setProjects] = useState({})
  const [filtereProject, setFilteredProject] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  if (!projects.length) return null

  function htmlProject() {
    setFilteredProject(projects.filter(project => project.tools === "html"))
  }
  
  function cssProject() {
    setFilteredProject(projects.filter(project => project.tools === "css"))
  }

  function react () {
    setFilteredProject(projects.filter(project => project.tools === "react"))
  }

  return (
    <>
      <ProjectsTypeStyle>
        <h3>Projects</h3>
        <button onClick={htmlProject}>Html css</button>
        <button onClick={cssProject}>Javascript</button>
        <button onClick={react}>React</button>
      </ProjectsTypeStyle>
      <Projects projects={ projects }/>
    </>
  )
}
