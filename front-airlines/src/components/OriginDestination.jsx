import React, { useState } from 'react'
import Select from 'react-select'

const options = [
    { value: 'madrid', label: 'Madrid' },
    { value: 'berlin', label: 'Berlin' },
    { value: 'london', label: 'London' }
  ]

const OriginDestination = ({origen, destino}) => {

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

    return (
      <div className='row'>
        <div id="" className="col pt-3  ms-5 ">
          <Select id="" options={options} placeholder="Origin" onChange={e=>origen(e.value)}/>
        </div>
        <div className='col col-sm-1 pt-4 '><p>to</p></div>
        <div id="" className="col pt-3 me-5">
          <Select id="" options={options} placeholder="Destination" onChange={e=>destino(e.value)}/>
        </div>
      </div>
    );
}

export default OriginDestination;
