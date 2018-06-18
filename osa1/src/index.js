import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10
  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Nestor" age={10+6} />
    <Footer />
  </div>
 )
}

const Footer = () => {
  return (
    <div>greeting app created by <a href="https://youtube.com">Youtube</a></div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))