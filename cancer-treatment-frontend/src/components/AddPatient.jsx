import React, { useState } from 'react';
import axios from 'axios';

const AddPatient = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    cancer_type: '',
    diagnosis_date: '',
    contact_info: ''
  });

  const handleInputChange = (event) => {
    setPatientData({
      ...patientData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/patients/', patientData)
      .then(response => {
        console.log('Patient added:', response.data);
        // Optionally, clear the form or update the patient list
      })
      .catch(error => {
        console.error('Error adding patient:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>Add New Patient</h2>
      <input type="text" name="name" className="form-control" value={patientData.name} onChange={handleInputChange} placeholder="Patient Name" />
      <input type="number" name="age" className="form-control" value={patientData.age} onChange={handleInputChange} placeholder="Age" />
      <input type="text" name="cancer_type" className="form-control" value={patientData.cancer_type} onChange={handleInputChange} placeholder="Cancer Type" />
      <input type="date" name="diagnosis_date" className="form-control" value={patientData.diagnosis_date} onChange={handleInputChange} />
      <input type="text" name="contact_info" className="form-control" value={patientData.contact_info} onChange={handleInputChange} placeholder="Contact Info" />
      <button onClick={handleSubmit}>Add Patient</button>
    </form>
  );  
};

export default AddPatient;