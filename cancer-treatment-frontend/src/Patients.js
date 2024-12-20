import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/patients/')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Patients List</h1>
      <ul className="list-group">
        {patients.map(patient => (
          <li key={patient.id} className="list-group-item">
            {patient.name} - {patient.cancer_type}
          </li>
        ))}
      </ul>
    </div>
  );  
};



export default Patients;
