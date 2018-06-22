import React from 'react'
import ReactDOM from 'react-dom'

{/*class Hello extends React.Component {
  render() {
    const {name, age} = this.props
    const bornYear = () => new Date().getFullYear() - age
    
  return (
    <div>
      <p>Hello {name}, you are {age} years old.<br />
      So you were probably born in {bornYear()}.
      </p>
    </div>
  )
 }
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

ReactDOM.render(<App />, document.getElementById('root')) */}

{/* 
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 1
    }
  }

  kasvataYhdella = () => {
    this.setState({ counter: this.state.counter + 1})
  }

  nollaa = () => {
    this.setState({ counter: 0})
  }

  asetaArvoon = (arvo) => () => this.setState({ counter: arvo })
  
  render() {
    return (
      <div>
        <Display counter={this.state.counter}/>
        <div>
         <Button
          handleClick={this.asetaArvoon(this.state.counter + 1)}
           text="Plus"
          />
         <Button
          handleClick={this.asetaArvoon(this.state.counter - 1)}
            text="Minus"
          />
         <Button
          handleClick={this.asetaArvoon(0)}
           text="Zero"
         />
       </div>
     </div>
    )
  }
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
*/}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vasen: 0,
      oikea: 0,
      kaikki: []
    }
  }

  klikVasen = () => {
    this.setState({
      vasen: this.state.vasen + 1,
      kaikki: this.state.kaikki.concat('v')
    })
  }

  klikOikea = () => {
    this.setState({
      oikea: this.state.oikea + 1,
      kaikki: this.state.kaikki.concat('o')
    })
  }

  render() {
    const historia = () => {
      if (this.state.kaikki.length === 0) {
        return (
          <div>
            <em>sovellusta käytetään nappeja painelemalla</em>
          </div>
        )
      }
      return (
        <div>
          näppäilyhistoria: {this.state.kaikki.join(' ')}
        </div>
      )
    }
    return (
      <div>
        <div>
          {this.state.vasen}
          <button onClick={this.klikVasen}>vasen</button>
          <button onClick={this.klikOikea}>oikea</button>
          {this.state.oikea}
          <div>{historia()}</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


