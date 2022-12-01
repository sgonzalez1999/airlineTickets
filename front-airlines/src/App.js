
import './App.css';
import LoginPage from './pages/LoginPage';
import FlightChooserPage from './pages/FlightChooserPage';
import {Routes, Route} from 'react-router-dom';
import FormPeople from '././pages/FormPeople';


function App() {
  return (

  <Routes>
    <Route path='/' element={<LoginPage/>}></Route>
    <Route path='/FlightChooserPage' element={<FlightChooserPage/>}></Route>
    <Route path="/peopleInformation" element={<FormPeople/>}></Route>
  </Routes>
  );
}

export default App;
