import React, { useState } from 'react';
import axios from 'axios';  // Import axios

const PatientRegistration = () => {
  const [formData, setFormData] = useState({ name: '', age: '', medicalHistory: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Update form data as user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to the backend API
      const response = await axios.post('https://your-api-endpoint.com/patients', formData);
      
      // If successful, show success message
      if (response.status === 200) {
        setSuccessMessage('Patient registered successfully!');
        setFormData({ name: '', age: '', medicalHistory: '' });  // Reset form
      }
    } catch (error) {
      // Handle errors
      setErrorMessage('There was an error submitting the form. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register Patient</h2>
        {successMessage && <p className="success">{successMessage}</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <textarea
          name="medicalHistory"
          placeholder="Medical History"
          value={formData.medicalHistory}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegistration;
