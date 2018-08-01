import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = () =>{
    return (
        <div>
            <h1>Opetusohjelma :)</h1>
        </div>
    )
}

const Yhteensa = (props) =>{

    return (
        <div>
            <p>Tehtäviä yhteensä: {props.sum}.</p>
        </div>
    )
}
const Osa = (props) =>{
    return (
        <div>
            <h3>{props.subTitle}</h3>
            {props.tehtavia}
            <p> Kurssissa tehtäviä yhteensä: {props.sum}</p>
        </div>
    )
} 
const Kurssi = (props) =>{
    return(
        <div>
            <p>Tehtäviä yhteensä: {props.sum}</p>
        </div>
    )
}



const App = () => {
    const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        },
        {
          nimi: 'Redux',
          tehtavia: 7,
          id: 4
        },
        {
          nimi: 'Testaus',
          tehtavia: 3,
          id: 5
    }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        },
        {
            nimi: 'Hello test',
            tehtavia: 1,
            id: 3
          }
      ]
    }
]
    const subTitle = kurssit.map(function(x){
        return x.nimi
    })

    const mappingFunction = p => 
    <li key={p.id}>
    Kurssi: <strong>{p.nimi}</strong> - tehtäviä: {p.tehtavia}
    </li>

    const halfStackSisalto = kurssit[0].osat.map(mappingFunction);
    const nodeSisalto = kurssit[1].osat.map(mappingFunction);

    const summa = (acc, currValue) => {
        return acc + currValue;
    }

    const halfStackTehtavia = kurssit[0].osat.map(function(x){
        return x.tehtavia
    })
     const halfStackSum = halfStackTehtavia.reduce(summa);

    const nodeTehtavia = kurssit[1].osat.map(function(x){
        return x.tehtavia
    })

    const nodeSum = nodeTehtavia.reduce(summa);


    return (
      <div>
        <Otsikko />
        <Osa subTitle={subTitle[0]} tehtavia={halfStackSisalto} sum={halfStackSum} />
        <Osa subTitle={subTitle[1]} tehtavia={nodeSisalto} sum={nodeSum} />
      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))
