import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Navigation from './components/navigation';


import Chapters from'./pages/Chapters';
import Home from'./pages/Home';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
            <Navigation />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/about' element={<Chapters />} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
