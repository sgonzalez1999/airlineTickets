import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useState } from 'react';

import { isVisible } from '@testing-library/user-event/dist/utils';
import PopUppeople from '../components/PopUppeople';
import PeopleInformationForm from '../components/PeopleInformation';
  
const FormPeople = (props) => {

  const [isvisible, setIsvisible]= useState(true);

  const [num, setNum]= useState(null);

  const ver = (isVis)=>{
    setIsvisible(isVis)
  };

  const check = (numero)=>{
    setNum(numero)
  };
  
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab >Persona 1</Tab>
          <Tab>Persona 2</Tab>
          <Tab>Persona 3</Tab>
          <Tab>Persona 4</Tab>
        </TabList>

        <TabPanel>
          <PeopleInformationForm />
        </TabPanel>
        <TabPanel>
          <PeopleInformationForm />
        </TabPanel>
        <TabPanel>
          <PeopleInformationForm />
        </TabPanel>
        <TabPanel>
          <PeopleInformationForm />
        </TabPanel>
      </Tabs>

      {isvisible && <PopUppeople func={ver} check={check} />}
      

    </div>
  );
};
  
export default FormPeople;