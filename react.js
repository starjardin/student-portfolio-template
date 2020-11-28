import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import PersonalDetails from './components/PersonalDetails'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <PersonalDetails />
      <Skills />
    </>
  )
}


ReactDOM.render(<App />, document.querySelector("#root"))