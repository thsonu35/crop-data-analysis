import React from 'react';
import CropData from './pages/CropData/CropData';
import AverageData from './pages/avgData/AverageData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>

      <Router>
        <Routes>
      <Route path="/" element={<CropData />} />

      
          <Route path="/Average" element={<AverageData />} />
          </Routes>
          </Router>
        
       

        
          {/* Other routes can be defined here if needed */}
      </div>
        
      </header>
    </div>
  );
}

export default App;
