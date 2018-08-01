import React from 'react';
import './index.css';
import Nimet from './components/Nimet';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fullfilled')
        this.setState({ persons: response.data })
      })
  }

  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const newList = this.state.persons.concat(nameObject);
    const nimi = this.state.newName;
    const oldList = this.state.persons.map(function (x) {
      return x.name
    })
    if (!oldList.includes(nimi)) {
      this.setState({
        persons: newList,
        newName: '',
        newNumber: ''
      })
    }
    else {
      alert('Syöttämäsi nimi on jo listassa!')
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    console.log('render')
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
          etsi nimellä: <input
            value={this.state.filter}
            onChange={this.handleFilterChange} />
        </div>
        <form onSubmit={this.addName}>
          <div>
            <h2> Lisää uusi nimi </h2>
            nimi: <input
              placeholder='Kirjoita nimi tähän...'
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            numero: <input
              placeholder='Kirjoita numero tähän...'
              value={this.state.newNumber}
              onChange={this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <Nimet
          data={this.state.persons}
          filter={this.state.filter} />
      </div>
    )
  }
}

export default App;
