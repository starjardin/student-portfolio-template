import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import PersonalDetails from './components/PersonalDetails'

function App() {
  return (
    <>
      <Header />
      <PersonalDetails />
    </>
  )
}


ReactDOM.render(<App />, document.querySelector("#root"))