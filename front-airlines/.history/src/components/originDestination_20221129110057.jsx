import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const OriginDestination = () => {
    return (
      <div id="" className='w-50 p-3'>
        <Select id="" options={options} />
      </div>
      <div id="" className='w-50 p-3'>
        <Select id="" options={options} />
      </div>
    );
}

export default OriginDestination;
