
import './App.css';
import LoginPage from './pages/LoginPage';
import FlightChooserPage from './pages/FlightChooserPage';
import {Routes, Route} from 'react-router-dom';
import FormPeople from '././pages/FormPeople';


function App() {
  return (

  <Routes>
<<<<<<< HEAD
    {/* <Route path='/' element={<LoginPage/>}></Route> */}
    <Route path='/' element={<FlightChooserPage/>}></Route>
=======
    <Route path='/' element={<LoginPage/>}></Route>
    <Route path='/FlightChooserPage' element={<FlightChooserPage/>}></Route>
    <Route path="/peopleInformation" element={<FormPeople/>}></Route>
>>>>>>> develop
  </Routes>
  );
}

export default App;
