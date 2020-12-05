import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import PersonalDetails from './components/PersonalDetails'
import ProjectsType from './components/ProjectsType'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <PersonalDetails />
      <Skills />
      <ProjectsType />
    </>
  )
}


ReactDOM.render(<App />, document.querySelector("#root"))