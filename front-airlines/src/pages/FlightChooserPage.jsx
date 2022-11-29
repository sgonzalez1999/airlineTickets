import React from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Flight from '../components/Flight';
import Logo from '../components/Logo';
import OriginDestination from '../components/OriginDestination';

const FlightChooserPage = () => {
    return (
        <div>
            <Logo/>
            {/* <CalendarComponent/>
            <Flight/> */}
            <OriginDestination></OriginDestination>
        </div>
    );
}

export default FlightChooserPage;
