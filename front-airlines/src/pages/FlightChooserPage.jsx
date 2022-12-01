import React, { useState } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Flight from '../components/Flight';
import Logo from '../components/Logo';
import OriginDestination from '../components/OriginDestination';
import Filters from '../components/Filters';
import axios from "axios";
import PeopleInformationForm from '../components/PeopleInformation';

const FlightChooserPage = () => {

    const [escalas, setEscalas] = useState(false);
    const [equipaje, setEquipaje] = useState(false);
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [select, setSelect] = useState("");
    const [fecha, setFecha] = useState("");

    
    
    const url = "http://localhost:9000/flights";

    function changeEscale () {
        setEscalas(!escalas);
        console.log("kjadfkjkjaskjskjdaskj", escalas, "aaaaaaaaa", equipaje);
        filtering();
    }

    function changeEquipaje () {
        setEquipaje(!equipaje);
        console.log("kjadfkjkjaskjskjdaskj", escalas, "aaaaaaaaa", equipaje);
        filtering();
    }

    function changeSelect (text) {
        setSelect(text);
        console.log(text, "kjadfkjkjaskjskjdaskj", escalas, "aaaaaaaaa", equipaje);
        filtering();
    }

    function changeOrigen (text) {
        setOrigen(text);
        console.log(text, "ORIGEN");
        filtering();
    }

    function changeDestino (text) {
        setDestino(text);
        console.log(text, "DESTINO");
        filtering();
    }

    function changeFecha (text) {
        setFecha(text);
        console.log(text, "fecha");
        filtering();
    }

    function filtering() {
        axios.get(url, { params: {origen, destino, select, escalas, equipaje} }).then(function (returned) {
            
        });
    }

    return (
        <div className='ms-5'>
            <Logo/>
            <div className='row'>
                <Filters className='col-1' escalas={changeEscale} equipaje={changeEquipaje} select={changeSelect}/>
                <div className='col-6'>
                    <OriginDestination origen={changeOrigen} destino={changeDestino}/>
                    <Flight/>
                    <Flight/>
                </div>
                <div className='col'>
                    <CalendarComponent fecha={changeFecha}/>
                </div>
            </div>
        </div>
    );
}

export default FlightChooserPage;
