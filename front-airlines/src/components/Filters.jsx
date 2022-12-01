import React, { useState, useRef } from 'react'
import ToggleSwitch from "././tools/ToggleSwitch";
import Select from 'react-select'
import Form from 'react-bootstrap/Form';
import PeopleInformationForm from './PeopleInformation';

const options = [
    { value: 'iberia', label: 'Iberia' },
    { value: 'rayanair', label: 'Rayanair' },
    { value: 'qatar', label: 'Qatar' }
  ]


  

    const OriginDestination = ({escalas, equipaje, select}) => {

    return (
      <div className=" w-25 ms-3 p-4 ">
        <div id="" className="row mt-3">
          <div className="col">
            <p>Escalas</p>
          </div>
          <div className="col">
            <Form.Check
              type="switch"
              id={`<2`}
              name="group1"
              onClick={(e) => escalas()}
            />
          </div>
        </div>

        <div id="" className="row mt-3">
          <div className="col">
            <p>Equipaje</p>
          </div>
          <div className="col">
            <Form.Check
              type="switch"
              id={`<2`}
              name="group1"
              onClick={(e) => equipaje()}
            />
          </div>
        </div>

        <div id="" className="row mt-3">
          <div className="col">
            <p>Aerolinea</p>
          </div>
          <div className="col">
            <Select
              id="airline"
              options={options}
              placeholder="Airline"
              onChange={(e) => select(e.value)}
            />
          </div>
          <h1>{select}</h1>
        </div>
      </div>
    );
}

export default OriginDestination;