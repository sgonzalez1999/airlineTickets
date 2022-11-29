import React from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Flight from '../components/Flight';
import Logo from '../components/Logo';

const FlightChooserPage = () => {
    return (
        <div>
            <Logo/>
            <CalendarComponent/>
            <Flight/>
        </div>
    );
}

export default FlightChooserPage;
