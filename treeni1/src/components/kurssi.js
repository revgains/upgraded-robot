import React from 'react'
import kurssit from '../index'

const Otsikko = () =>{
    return (
        <div>
            <h1>Opetusohjelma :)</h1>
        </div>
    )
}

const Sisalto = (props) =>{
    return (
        <div>
            <h3>{props.subTitle}</h3>
            {props.tehtavia}
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

const Kurssi = (kurssit) =>{
    return(
        <div>
            <Otsikko />
                <Sisalto subTitle={subTitle[0]} tehtavia={halfStackSisalto} />
                <Yhteensa sum={halfStackSum} />
                <Sisalto subTitle={subTitle[1]} tehtavia={nodeSisalto} />
        </div>
    )
}


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


export default Kurssi