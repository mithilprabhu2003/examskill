// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/Navbar';
import Home from './Components/home';
import About from './Components/About';
import Destination from './Components/Destination';


function App() {
  return (
   <>
    <BrowserRouter>
    <NavBar/>
    <Routes> 
    <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Menu' element={<Destination/>}/>
      

     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
