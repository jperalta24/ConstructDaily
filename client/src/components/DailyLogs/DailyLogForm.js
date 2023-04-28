import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import dayjs from 'dayjs';
// const today = new Date().toISOString().split('T')[0];
const DailyLogForm = ({ onSubmit, project }) => {
  const [formData, setFormData] = useState({
    date: '',
    workCompleted: [{}],
    materialsUsed: [{}],
    equipmentUsed: [[]],
    weather: [[]],
    delays: [[]],
    safetyIncidents: [[]],
    communications: [{}],
  });

  const handleSimpleChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setFormData({ ...formData, [name]: value });
  };
  
  
  

  const handleChange = (e, index, fieldName) => {
    const { name, value } = e.target;

    if (fieldName === "weather") {
      const updatedWeather = [...formData.weather];
      updatedWeather[index] = { ...updatedWeather[index], [name]: value };
      setFormData({ ...formData, weather: updatedWeather });
    } else {
      const updatedField = [...formData[fieldName]];
      updatedField[index] = { ...updatedField[index], [name]: value };
      setFormData({ ...formData, [fieldName]: updatedField });
    }
  };
  // const handleChange = (e, index, fieldName) => {
  //   const { name, value } = e.target;
  //   const updatedField = [...formData[fieldName]];
  //   updatedField[index] = { ...updatedField[index], [name]: value };
  //   setFormData({ ...formData, [fieldName]: updatedField });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      workCompleted: formData.workCompleted.map((item) => ({
        ...item,
        hoursWorked: parseInt(item.hoursWorked, 10) || 0,
      })),
      materialsUsed: formData.materialsUsed.map((item) => ({
        ...item,
        quantity: parseInt(item.quantity, 10) || 0,
      })),
      equipmentUsed: formData.equipmentUsed.map((item) => ({
        ...item,
        hoursUsed: parseInt(item.hoursUsed, 10) || 0,
      })),
      delays: formData.delays.map((item) => ({
        ...item,
        duration: parseInt(item.duration, 10) || 0,
      })),
      weather: formData.weather.map((item) => ({
        ...item,
        temperature: parseInt(item.temperature, 10) || 0,
      })),
    };

    onSubmit(updatedFormData, project);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(formData, project);
  // };

  return (
    <Container className="construction-theme-form mt-4">
    <Form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleSimpleChange}
        placeholder="Date"
      />
      {/* Work completed */}
      {formData.workCompleted.map((work, index) => (
        <div key={index}>
          <input
            type="text"
            name="taskDescription"
            value={work.taskDescription}
            onChange={(e) =>
              handleChange(e, index, 'workCompleted')
            }
            placeholder="Work completed description"
          />
          <input
            type="number"
            name="hoursWorked"
            value={work.hoursWorked}
            onChange={(e) =>
              handleChange(e, index, 'workCompleted')
            }
            placeholder="Work completed hours"
          />
          <input
            type="text"
            name="workerName"
            value={work.workerName}
            onChange={(e) =>
              handleChange(e, index, 'workCompleted')
            }
            placeholder="Workers"
          />
        </div>
      ))}
      {/* Materials used */}
      {formData.materialsUsed.map((material, index) => (
        <div key={index}>
          <input
            type="text"
            name="materialName"
            value={material.materialName}
            onChange={(e) =>
              handleChange(e, index, 'materialsUsed')
            }
            placeholder="Material name"
          />
          <input
            type="number"
            name="quantity"
            value={material.quantity}
            onChange={(e) =>
              handleChange(e, index, 'materialsUsed')
            }
            placeholder="Material quantity"
          />
        </div>
      ))}
      {/* Equipment used */}
      {formData.equipmentUsed.map((equipment, index) => (
        <div key={index}>
          <input
            type="text"
            name="equipmentName"
            value={equipment.equipmentName}
            onChange={(e) => handleChange(e, index, 'equipmentUsed')}
            placeholder="Equipment used"
          />
          <input
            type="number"
            name="hoursUsed"
            value={equipment.hoursUsed}
            onChange={(e) => handleChange(e, index, 'equipmentUsed')}
            placeholder="Hours used"
          />
        </div>
      ))}
      {/* Weather conditions */}
      {formData.weather.map((weather, index) => (
        <div key={index}>
          <input
            type="text"
            name="conditions"
            value={weather.conditions}
            onChange={(e) => handleChange(e, index, 'weather')}
            placeholder="Weather conditions"
          />
          <input
            type="number"
            name="temperature"
            value={weather.temperature}
            onChange={(e) => handleChange(e, index, 'weather')}
            placeholder="Temperature"
          />
        </div>
      ))}
      {/* Delays */}
      {formData.delays.map((delay, index) => (
        <div key={index}>
          <input
            type="text"
            name="description"
            value={delay.description}
            onChange={(e) => handleChange(e, index, 'delays')}
            placeholder="Delays"
          />
          <input
            type="number"
            name="duration"
            value={delay.duration}
            onChange={(e) => handleChange(e, index, 'delays')}
            placeholder="Duration"
          />
        </div>
      ))}
      {/* Safety incidents */}
      {formData.safetyIncidents.map((incident, index) => (
        <div key={index}>
          <input
            type="text"
            name="description"
            value={incident.description}
            onChange={(e) => handleChange(e, index, 'safetyIncidents')}
            placeholder="Safety incident description"
          />
          <input
            type="text"
            name="severity"
            value={incident.severity}
            onChange={(e) => handleChange(e, index, 'safetyIncidents')}
            placeholder="Safety incident severity"
          />
        </div>
      ))}
      {/* Communications */}
      {formData.communications.map((communication, index) => (
        <div key={index}>
          <input
            type="text"
            name="messageContent"
            value={communication.messageContent}
            onChange={(e) =>
              handleChange(e, index, 'communications')
            }
            placeholder="Communication text"
          />
          <input
            type="text"
            name="messageType"
            value={communication.messageType}
            onChange={(e) =>
              handleChange(e, index, 'communications')
            }
            placeholder="Communication text"
          />
        </div>
      ))}
      {/* Submit button */}
      <Button type="submit" className="mt-3">
        Save Daily Log
      </Button>
    </Form>
  </Container>
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



