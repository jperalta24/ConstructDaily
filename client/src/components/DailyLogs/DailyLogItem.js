import React from 'react';

const DailyLogItem = ({ dailyLog }) => {
  const {
    workCompleted,
    materialsUsed,
    equipmentUsed,
    weather,
    delays,
    safetyIncidents,
    communications,
  } = dailyLog;

  return (
    <div className="daily-log-item">
      <h3>{dailyLog.date}</h3>
      <h4>Work Completed:</h4>
      <ul>
        {workCompleted.map((item, index) => (
          <li key={index}>{item.workerName}: {item.taskDescription} ({item.hoursWorked} hours)</li>
        ))}
      </ul>
      <h4>Materials Used:</h4>
      <ul>
        {materialsUsed.map((item, index) => (
          <li key={index}>{item.materialName} ({item.quantity})</li>
        ))}
      </ul>
      <h4>Equipment Used:</h4>
      <ul>
        {equipmentUsed.map((item, index) => (
          <li key={index}>{item.equipmentName} ({item.hoursUsed} hours)</li>
        ))}
      </ul>
      <h4>Weather Conditions:</h4>
      <p>
        Temperature: {weather.temperature}°F, Conditions: {weather.conditions}
      </p>
      <h4>Delays:</h4>
      <ul>
        {delays.map((item, index) => (
          <li key={index}>{item.description} (Duration: {item.duration} hours)</li>
        ))}
      </ul>
      <h4>Safety Incidents:</h4>
      <ul>
        {safetyIncidents.map((item, index) => (
          <li key={index}>{item.description} (Severity: {item.severity})</li>
        ))}
      </ul>
      <h4>Communications:</h4>
      <ul>
        {communications.map((item, index) => (
          <li key={index}>{item.messageType}: {item.messageContent}</li>
        ))}
      </ul>
    </div>
  );
};

export default DailyLogItem;




// Your DailyLogItem.js will be a React component responsible for displaying individual daily log entries. This component will receive a daily log object as a prop and render its details, such as work completed, materials used, equipment used, weather conditions, delays, safety incidents, and communications. Here's a basic example of what the DailyLogItem.js component could look like:

// In this example, the DailyLogItem component takes a dailyLog prop, which represents an individual daily log object containing details such as work completed, materials used, equipment used, weather conditions, delays, safety incidents, and communications. The component renders these details in a structured format.

// You can customize this component as needed by adding or modifying the displayed details, implementing additional functionality (e.g., editing or deleting daily log entries), or styling the component elements.