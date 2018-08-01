import React from 'react';
import './index.css';
import * as FontAwesome from 'react-icons/lib/fa';

const MokkiNumero = () => {
    return(
        <div className='numero-pallo'>
            <div>
                <h3>1</h3>
            </div>
        </div>
    )
}

const App = () => {
    return(
        <div className='btnBooking primaryColor'>
           <div className= 'btnContainer'>
                <div><h3>Check availability</h3></div>
                <div><p className = "tinyParagraph">We will transfer you to booking.com</p></div>
            </div>
            <div className = "icon-right">
                 <div><FontAwesome.FaArrowRight /></div>
                {/* <MokkiNumero /> */}
            </div>
        </div>
    )
}

export default App;