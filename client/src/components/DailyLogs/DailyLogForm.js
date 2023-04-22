import React, { useState } from 'react';

const DailyLogForm = ({ onSubmit, project }) => {
  const [formData, setFormData] = useState({
    workCompleted: '',
    materialsUsed: '',
    equipmentUsed: '',
    weatherConditions: '',
    delays: '',
    safetyIncidents: '',
    communications: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, project);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Work completed */}
      <input
        type="text"
        name="workCompleted"
        value={formData.workCompleted}
        onChange={handleChange}
        placeholder="Work completed"
      />
      {/* Materials used */}
      <input
        type="text"
        name="materialsUsed"
        value={formData.materialsUsed}
        onChange={handleChange}
        placeholder="Materials used"
      />
      {/* Equipment used */}
      <input
        type="text"
        name="equipmentUsed"
        value={formData.equipmentUsed}
        onChange={handleChange}
        placeholder="Equipment used"
      />
      {/* Weather conditions */}
      <input
        type="text"
        name="weatherConditions"
        value={formData.weatherConditions}
        onChange={handleChange}
        placeholder="Weather conditions"
      />
      {/* Delays */}
      <input
        type="text"
        name="delays"
        value={formData.delays}
        onChange={handleChange}
        placeholder="Delays"
      />
      {/* Safety incidents */}
      <input
        type="text"
        name="safetyIncidents"
        value={formData.safetyIncidents}
        onChange={handleChange}
        placeholder="Safety incidents"
      />
      {/* Communications */}
      <input
        type="text"
        name="communications"
        value={formData.communications}
        onChange={handleChange}
        placeholder="Communications"
      />
      {/* Submit button */}
      <button type="submit">Save Daily Log</button>
    </form>
  );
};

export default DailyLogForm;

// In this example, DailyLogForm takes two props: onSubmit and project. 
// The onSubmit prop should be a function that handles form submission and interacts with the backend using GraphQL mutations. 
// The project prop represents the current project for which the daily log entry is being created or updated.

// The component maintains its own state to store form data. 
// As the user inputs data into the form fields, the handleChange function is called to update the state with the new data. When the form is submitted, the handleSubmit function is called to execute the onSubmit prop function with the form data and the project.

// You can customize this form as needed by adding or modifying form fields, 
// adding validation, or styling the form elements. The form can also be extended to handle more complex data types, such as arrays or nested objects, for fields like materials used or equipment used.



