import React from 'react'
import ReactDOM from 'react-dom'
import PersonalDetails from './components/PersonalDetails'

function App() {
  return (
    <>
      <PersonalDetails />
    </>
  )
}


ReactDOM.render(<App />, document.querySelector("#root"))