import React from 'react';
import PropTypes from 'prop-types';


const Flight = (props) => {
    return (
        <div className='border border-dark border-2 rounded-pill m-4'>
            <div className='row mt-2'>
                <h6 className='col'>Madrid to London</h6>
                <h6 className='col'>15:30</h6>
                <h6 className='col'>53.66€</h6>
            </div>
            <div className='row mt-3'>
                <h6 className='col'>Balconing Air Lane</h6>
                <h6 className='col' ></h6>
                <h6 className='col'>No Luggage</h6>
            </div>
        </div>
    );
};

export default Flight;
