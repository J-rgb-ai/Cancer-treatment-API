import React from 'react';
import Dashboard from './components/Dashboard';
import PatientRegistration from './components/PatientRegistration';
import './styles.css';


const App = () => {
  return (
    <div className="App">
      <h1>Cancer Treatment API UI</h1>
      <Dashboard />
      <PatientRegistration />
    </div>
  );
};

export default App;
