import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const DailyLogForm = ({ onSubmit, project }) => {
  const [formData, setFormData] = useState({
    date: "",
    workCompleted: [
      {
        taskDescription: "",
        hoursWorked: "",
        workerName: "",
      },
    ],
    materialsUsed: [
      {
        materialName: "",
        quantity: "",
      },
    ],
    equipmentUsed: [
      {
        equipmentName: "",
        hoursUsed: "",
      },
    ],
    weather: [
      {
        conditions: "",
        temperature: "",
      },
    ],
    delays: [
      {
        description: "",
        duration: "",
      },
    ],
    safetyIncidents: [
      {
        description: "",
        severity: "",
      },
    ],
    communications: [
      {
        messageContent: "",
        messageType: "",
      },
    ],
  });

  const handleSimpleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateISO = new Date(formData.date).toISOString();

    const updatedFormData = {
      ...formData,
      date: dateISO,
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
              onChange={(e) => handleChange(e, index, "workCompleted")}
              placeholder="Work completed description"
            />
            <input
              type="number"
              name="hoursWorked"
              value={work.hoursWorked}
              onChange={(e) => handleChange(e, index, "workCompleted")}
              placeholder="Work completed hours"
            />
            <input
              type="text"
              name="workerName"
              value={work.workerName}
              onChange={(e) => handleChange(e, index, "workCompleted")}
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
              onChange={(e) => handleChange(e, index, "materialsUsed")}
              placeholder="Material name"
            />
            <input
              type="number"
              name="quantity"
              value={material.quantity}
              onChange={(e) => handleChange(e, index, "materialsUsed")}
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
              onChange={(e) => handleChange(e, index, "equipmentUsed")}
              placeholder="Equipment used"
            />
            <input
              type="number"
              name="hoursUsed"
              value={equipment.hoursUsed}
              onChange={(e) => handleChange(e, index, "equipmentUsed")}
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
              onChange={(e) => handleChange(e, index, "weather")}
              placeholder="Weather conditions"
            />
            <input
              type="number"
              name="temperature"
              value={weather.temperature}
              onChange={(e) => handleChange(e, index, "weather")}
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
              onChange={(e) => handleChange(e, index, "delays")}
              placeholder="Delays"
            />
            <input
              type="number"
              name="duration"
              value={delay.duration}
              onChange={(e) => handleChange(e, index, "delays")}
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
              onChange={(e) => handleChange(e, index, "safetyIncidents")}
              placeholder="Safety incident description"
            />
            <input
              type="text"
              name="severity"
              value={incident.severity}
              onChange={(e) => handleChange(e, index, "safetyIncidents")}
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
              onChange={(e) => handleChange(e, index, "communications")}
              placeholder="Message Content"
            />
            <input
              type="text"
              name="messageType"
              value={communication.messageType}
              onChange={(e) => handleChange(e, index, "communications")}
              placeholder="Message Type"
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
