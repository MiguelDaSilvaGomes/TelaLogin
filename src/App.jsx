import React from 'react';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import "./App.css"
import Login from './component/login';
import Home from './page/Home/home';

const App = () => {
  return ( 
    <Router>
       <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home />}/>
       </Routes>
    </Router>
   );
}
 
export default App;