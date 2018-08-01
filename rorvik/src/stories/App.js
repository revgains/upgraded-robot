import React from 'react';
import '../index.css';
import * as FontAwesome from 'react-icons/lib/fa';

const ArrowRight = require('react-icons/lib/fa/arrow-right');

const App = () => {
    return(
        <div className='btnBooking primaryColor'>
           <div className= 'btnContainer'>
                <div><h3>Check availability</h3></div>
                <div><p className = "tinyParagraph">We will transfer you to booking.com</p></div>
            </div>
            <div className = "icon-right">
                 <div><FontAwesome.FaArrowRight /></div>
            </div>
        </div>
    )
}

export default App;