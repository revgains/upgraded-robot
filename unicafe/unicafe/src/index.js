import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Otsikko = () => {
    const palauteText = 'Annathan palautetta'
    return (
        <div>
            <h1> {palauteText} </h1>
        </div>
    )
}

const Statistic =(props) => {
    console.log(props.total)
    if (props.total === 0) {
        return (
            <div>
                <h3> (O_O)? </h3>
            </div>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                  <tr>
                    <td>Palautteiden keskiarvo: </td>
                    <td>{(props.hyva - props.huono)/ props.total} </td>
                  </tr>
                  <tr>
                    <td>Positiiviset arvostelut: </td>
                    <td>{(props.hyva / props.total) * 100}%</td>
                  </tr>
                </tbody>
            </table>
        </div>
    )
}

const Statsit = (props) => {
    if (props.total === 0) {
            return (
            <div>
              <em>Arvioita ei ole viellä annettu, anna arvio nappia painamalla. </em>
            </div>
            )
        }
        return (
            <div>
                <h2> Asiakkaidemme arviot: </h2><br />
                <table>
                  <tbody>
                    <tr>
                      <td> Hyvä: </td>
                      <td>{props.hyva}</td>
                    </tr>
                    <tr>
                      <td> Huono: </td>
                      <td>{props.huono}</td>
                    </tr>
                    <tr>
                      <td> Neutraali: </td>
                      <td>{props.neutraali}</td>
                    </tr>
                  </tbody>
              </table>
            </div>
        )
    }
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
  
class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        huono: 0,
        neutraali: 0,
        total: 0
      }
    }
    clickHyva = () => this.setState({hyva: this.state.hyva + 1, total: this.state.total +1})

    clickHuono = () => this.setState({huono: this.state.huono + 1, total: this.state.total +1})

    clickNeutral = () => this.setState({neutraali: this.state.neutraali + 1, total: this.state.total +1})

    
    render() {
        return (
            <div>
                <Otsikko />
                <div>
                <Button handleClick={this.clickHyva} text="Hyvä"/>
                <Button handleClick={this.clickHuono} text= "Huono" />
                <Button handleClick={this.clickNeutral} text= "Neutraali" />
                </div>
                <Statsit hyva={this.state.hyva} huono={this.state.huono} neutraali={this.state.neutraali} total={this.state.total} />
                <Statistic total={this.state.total} hyva={this.state.hyva} huono={this.state.huono}/>
            </div>

           )
        }   
    }
    

ReactDOM.render(<App />, document.getElementById('root'));
