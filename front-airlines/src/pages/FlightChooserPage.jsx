import React from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Flight from '../components/Flight';
import Logo from '../components/Logo';
import OriginDestination from '../components/OriginDestination';
import Filters from '../components/Filters';
import PeopleInformationForm from '../components/PeopleInformation';

const FlightChooserPage = () => {
    return (
        <div>
            <Logo/>
            <PeopleInformationForm/>
        </div>
    );
}

export default FlightChooserPage;
