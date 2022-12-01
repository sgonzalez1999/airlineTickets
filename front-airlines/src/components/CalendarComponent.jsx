import React, { useState } from 'react';
//////////////////////////////////////////  Necesario para tener el calendario y el estilo del calendario(se pone solo el estilo)
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//////////////////////////////////////////  https://www.npmjs.com/package/react-calendar

const CalendarComponent = ({fecha}) => {

    const [value, onChange] = useState();

    return (
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={fecha(value)}
      />
    );
}

export default CalendarComponent;
