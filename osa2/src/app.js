import React from 'react'
import Note from './components/Note'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newNote: '',
      showAll: true
    }
    console.log(constructor)
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fullfilled')
        this.setState({notes: response.data})
      })
  }

  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: this.state.newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: this.state.notes.length +1
    }

    const notes = this.state.notes.concat(noteObject)

    this.setState({
      notes,
      newNote: ''
    })
   }

  handleNoteChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNote: event.target.value })
  }

  toggleVisible = () => {
    this.setState({showAll: !this.state.showAll})
  }

  render() {
    console.log('render')
    const notesToShow =
      this.state.showAll ?
        this.state.notes :
        this.state.notes.filter(note => note.important === true)

    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'

    return (
      <div>
        <h1>Muistiinpanot</h1>

        <div>
          <button onClick={this.toggleVisible}>
            Näytä {label}
          </button>
        </div>

        <ul>
          {notesToShow.map(note => <Note key={note.id} note={note} />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input
           value={this.state.newNote}
           onChange={this.handleNoteChange} />
          <button type="submit">Tallenna</button>
        </form>
      </div>
    )
  }
}

export default App