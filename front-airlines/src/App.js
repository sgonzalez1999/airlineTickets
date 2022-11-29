
import './App.css';
import LoginPage from './pages/LoginPage';
import FlightChooserPage from './pages/FlightChooserPage';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (

  <Routes>
    <Route path='/' element={<LoginPage/>}></Route>
    <Route path='/peme' element={<FlightChooserPage/>}></Route>
  </Routes>
  );
}

export default App;
