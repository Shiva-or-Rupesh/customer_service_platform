import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Main} from "./pages/main"
import { Login } from './pages/login';
import { Request } from './pages/request';
import { Navbar } from './components/navbar';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/request' element={<Request/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
