import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Documenet from './Documnets/Documenet';
import Resourses from './Resources/Resourses';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/docs' element={<Documenet/>}/>resourses
          <Route path='/resourses' element={<Resourses/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
