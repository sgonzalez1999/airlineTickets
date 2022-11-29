import React from 'react';
import PropTypes from 'prop-types';


const Flight = (props) => {
    return (
        <div className='border border-dark border-2 rounded-pill mt-4'>
            <div className='row mt-2 ps-5 '>
                <h6 className='col d-flex justify-content-center'>Flight: Madrid to London</h6>
                <h6 className='col d-flex justify-content-center'>Depart: 15:30</h6>
                <h6 className='col d-flex justify-content-center'>Price: 53.66€</h6>
            </div>
            <div className='row mt-3 ps-5'>
                <h6 className='col d-flex justify-content-center'>Air Lane: Balconing Air Lane</h6>
                <h6 className='col d-flex justify-content-center'></h6>
                <h6 className='col d-flex justify-content-center'>No Luggage</h6>
            </div>
        </div>
    );
};

export default Flight;
