import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) =>{
    return (
        <div>
            <h1>{props.kurssi.nimi}</h1>
        </div>
    )
}

const Sisalto = (props) =>{
    return (
        <div>
            <Osa nimi={props.kurssi.osat[0].nimi} tehtava={props.kurssi} />
       { /* <Osa nimi={props.kurssi} tehtava={props.kurssi} />
            <Osa nimi={props.kurssi} tehtava={props.kurssi} /> */}
        </div>
    )
}
const Yhteensa = (props) =>{

    return (
        <div>
            <p>Tehtäviä yhteensä: {props.kurssi}.</p>
        </div>
    )
}
const Osa = (props) =>{
    return (
        <div>
            <p>Kurssi: {props.kurssi}, tehtäviä: {props.kurssi}</p>
        </div>
    )
}



const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]
    }


    
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} /> 
            <Yhteensa osat={kurssi} /> 
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
