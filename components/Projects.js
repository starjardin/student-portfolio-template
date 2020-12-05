import React from 'react'
import ProjectsStyle from './styles/ProjectsStyle'


export default function Projects({ projects }) {
  return (
    <ProjectsStyle>
      <header>
        <h3>Hello world</h3>
      </header>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div>
            <img src={ project.img } alt="project image"/>
          </div>
          <div>
            <h4 className="tools">{ project.tools }</h4>
            <h4 className="title">{ project.title }</h4>
            <p>{ project.description}</p>
            <div className="anchor-container">
              <a className="anchor" href={project.demo}>Demo</a>
              <a className="anchor" href={project.code}>Code</a>
            </div>
          </div>
        </div>
      ))}
    </ProjectsStyle>
  )
}
