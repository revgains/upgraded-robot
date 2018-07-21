import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: 0,
        pisteet: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
      }
    }
    min = 0;
    max = 6;
    randomize = () => {
        console.log(this.state.pisteet)
        this.setState({selected: this.min + Math.floor(Math.random() * (this.max - this.min))});
    }

    voteQuote = () => {
        if (this.state.selected === 0) {
            this.setState({pisteet: this.state.pisteet[0] +1})
        if (this.state.selected === 1) {
            this.setState({pisteet: this.state.pisteet[1] +1}) 
        }
    }
  }

    render() {
      return (
        <div>
          {this.props.anecdotes[this.state.selected]}<br />
          <button onClick={this.randomize}> Get a random quote.</button>
          <button onClick={this.voteQuote}> Vote for this quote.</button>
        </div>
      )
    }
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )
