import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi.nimi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa nimi={props.kurssi.osat[0].nimi} tehtava={props.kurssi.osat[0].tehtavia}/>
      <Osa nimi={props.kurssi.osat[1].nimi} tehtava={props.kurssi.osat[1].tehtavia}/>
      <Osa nimi={props.kurssi.osat[2].nimi} tehtava={props.kurssi.osat[2].tehtavia}/>
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
         <p>Tehtaviä: {props.kurssi.osat[0].tehtavia + props.kurssi.osat[1].tehtavia + props.kurssi.osat[2].tehtavia} </p>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
      <p>Kurssi: {props.nimi}, tehtäviä: {props.tehtava}</p>
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

const kartta = kurssi.osat.map(function(a){
    return a.tehtavia
})

console.log(kartta)

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto kurssi={kurssi}/>
      <Yhteensa kurssi={kurssi}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));