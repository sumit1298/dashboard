import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Jobs from './components/Jobs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/jobs" element={<Jobs />} />
       
      </Routes>
    </Router>
  );
};

export default App;
