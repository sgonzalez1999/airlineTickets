import React from 'react'
import ToggleSwitch from "././tools/ToggleSwitch";
import Select from 'react-select'

const options = [
    { value: 'iberia', label: 'Iberia' },
    { value: 'rayanair', label: 'Rayanair' },
    { value: 'qatar', label: 'Qatar' }
  ]

const OriginDestination = () => {

    return (
      <div className="border border-dark border-2 w-25 ms-3 p-4">

<div id="" className="row mt-3">
          <div className="col">
            <p>Escalas</p>
          </div>
          <div className="col">
            <ToggleSwitch id="scale" label={"  "}/>
          </div>
        </div>
        

        <div id="" className="row mt-3">
          <div className="col">
            <p>Equipaje</p>
          </div>
          <div className="col">
            <ToggleSwitch id="luggage" label={" "}/>
          </div>
        </div>

        <div id="" className="row mt-3">
          <div className="col">
            <p>Aerolinea</p>
          </div>
          <div className="col">
            <Select id="airline" options={options} placeholder="Airline" />
          </div>
        </div>
      </div>
    );
}

export default OriginDestination;