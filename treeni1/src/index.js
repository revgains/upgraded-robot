import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) =>{
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = (props) =>{
    return (
        <div>
            <Osa nimi={props.nimi1} tehtava={props.tehtava1} />
            <Osa nimi={props.nimi2} tehtava={props.tehtava2} />
            <Osa nimi={props.nimi3} tehtava={props.tehtava3} />
        </div>
    )
}
const Yhteensa = (props) =>{
    return (
        <div>
            <p>Tehtäviä yhteensä: {props.total}.</p>
        </div>
    )
}
const Osa = (props) =>{
    return (
        <div>
            <p>Kurssi: {props.nimi}, tehtäviä: {props.tehtava}</p>
        </div>
    )
}


const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      }
      const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      }
      const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto nimi1={osa1} nimi2={osa2} nimi3={osa3} tehtava1={tehtavia1} tehtava2={tehtavia2} tehtava3={tehtavia3} />
            <Yhteensa total={tehtavia1 + tehtavia2 + tehtavia3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
