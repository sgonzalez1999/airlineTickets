import React from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Flight from '../components/Flight';
import Logo from '../components/Logo';
import OriginDestination from '../components/OriginDestination';
import Filters from '../components/Filters';
import PeopleInformationForm from '../components/PeopleInformation';

const FlightChooserPage = () => {
    return (
        <div className='ms-5'>
            <Logo/>
            <div className='row'>
                <Filters className='col-1'/>
                <div className='col-6'>
                    <OriginDestination />
                    <Flight/>
                    <Flight/>
                    <Flight/>
                    <Flight/>
                    <Flight/>
                    <Flight/>
                    <Flight/>
                    <Flight/>
                    <Flight/>
                    <Flight/>
                </div>
                <div className='col'>
                    <CalendarComponent/>
                </div>
            </div>
        </div>
    );
}

export default FlightChooserPage;
