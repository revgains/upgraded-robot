import React, { Component } from 'react';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import Header from './components/Header';

const Card = () => {
  return(
    <div >{harrastukset}</div>
  )
}

const hobbies = [
    {
      id: 1,
      Hobby: 'Powerlifting',
      Description: 'Powerlifting is a strength sport that consists of three attempts at maximal weight on three lifts: squat, bench press, and deadlift. As in the sport of Olympic weightlifting, it involves the athlete attempting a maximal weight single lift of a barbell loaded with weight plates.[1] Powerlifting evolved from a sport known as "odd lifts", which followed the same three-attempt format but used a wider variety of events, akin to strongman competition. Eventually odd lifts became standardized to the current three.',
      Image: 'plates'
    },
    {
      id: 2,
      Hobby: 'Hunting',
      Description: 'Hunting is the practice of killing or trapping animals, or pursuing or tracking them with the intent of doing so. Hunting wildlife or feral animals is most commonly done by humans for food, recreation, to remove predators that are dangerous to humans or domestic animals, or for trade. Lawful hunting is distinguished from poaching, which is the illegal killing, trapping or capture of the hunted species. The species that are hunted are referred to as game or prey and are usually mammals and birds.',
      Image: 'tempHeader'
    },
    {
      id: 3,
      Hobby: 'Hobby',
      Description: 'Random hobby, to be decided later, nobody gives a fuck about you hobbies anyways.',
      Image: 'plates'
    },
    {
      id:4,
      Hobby: 'Asderiksailu',
      Description: 'Asdin kirjoittaminen toistuvasti turhauttavissa tilanteissa...',
      Image: 'keyboard'
    }
  ]

  const harrastukset = hobbies.map(function(hobby) {
    return (
      <div key={hobby.id} className='flex-container'>
        <div>
        <h1>{hobby.Hobby}</h1>
        <p>{hobby.Description}</p>
        </div>
        <div>
          <img src={require(`./images/${hobby.Image}.jpg`)} alt={hobby.Hobby} />
        </div>
      </div>
    )
  })
  
  class App extends Component {
    render() {
      return (
        <div>
          <div className='site'>
            <Header />
            <TopNav />
            <Card />
            <Footer />
          </div>
        </div>
      );
    }
  }

  export default App;
