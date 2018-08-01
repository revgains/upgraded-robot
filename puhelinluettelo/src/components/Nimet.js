import React from 'react';

const Nimet = ({data, filter}) => {
    const nimiLista = data
    .filter(nimi => { 
      return nimi.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
    })
    .map(nimi => {
        return (
          <li key={nimi.name}>{nimi.name} : {nimi.number}</li>
        )
      })
    return (
      <div>
        <ul>
          {nimiLista}
        </ul>
      </div>
    )
  }

export default Nimet;