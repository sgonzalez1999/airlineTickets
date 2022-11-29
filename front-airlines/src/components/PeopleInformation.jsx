import React from 'react'
import ToggleSwitch from "././tools/ToggleSwitch";
import Select from 'react-select'
import Form from 'react-bootstrap/Form';


const options = [
    { value: 'iberia', label: 'Iberia' },
    { value: 'rayanair', label: 'Rayanair' },
    { value: 'qatar', label: 'Qatar' }
  ]

const PeopleInformationForm = (props) => {
  return (
    /**
     * • Name and surname
     * • Nationality
     * • Identification (NIF or passport)
     * • Age (list with possible values < 2 years, between 2 and 9 years, > 9 years). The default
        value will be > 9 years
     */

    <div className="me-5">
      <Form>
        <Form.Group className="m-3 me-5" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="m-3 me-5" controlId="formBasicSurname">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Apellidos" />
        </Form.Group>
        <Form.Group className="m-3 me-5" controlId="formBasicNacionality">
          <Form.Label>Nacionalidad</Form.Label>
          <Form.Control type="text" placeholder="Nacionalidad" />
        </Form.Group>
        <Form.Group className="m-3 me-5" controlId="formBasicIden">
          <Form.Label>Nif o pasaporte</Form.Label>
          <Form.Control type="text" placeholder="Nif o pasaporte" />
        </Form.Group>
        <Form.Group className="m-3 me-5" controlId="formBasicIden">
          <Form.Label>Edad</Form.Label>
          <Form.Check
            type="radio"
            id={`<2`}
            name="group1"
            label={`Menor de 2 años`}
          />
          <Form.Check
            type="radio"
            id={`2<>9`}
            name="group1"
            defaultChecked="true"
            label={`Entre 2 y 9 años`}
          />
          <Form.Check
            type="radio"
            id={`>9`}
            name="group1"
            defaultChecked
            label={`Mayor de 9 años`}
          />
        </Form.Group>
        
      </Form>
    </div>
  );
};

export default PeopleInformationForm;