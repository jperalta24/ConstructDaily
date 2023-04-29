import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
// import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHardHat,
  faWrench,
  faTools,
  faCloudSun,
  faClock,
  faExclamationTriangle,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';


// dayjs.extend(utc);

// import { parseISO, format, isValid } from 'date-fns';

const DailyLogItem = ({ dailyLog }) => {

  const formattedDate = dailyLog.date;



  const {
    workCompleted,
    materialsUsed,
    equipmentUsed,
    weather,
    delays,
    safetyIncidents,
    communications,
  } = dailyLog;

  console.log(dailyLog);
  return (
    <Card className="daily-log-item mb-4 construction-theme">
     <Card.Header as="h3">{formattedDate}</Card.Header>
      <Card.Body>
        <Card.Title as="h4"><FontAwesomeIcon icon={faHardHat} /> Work Completed:</Card.Title>
        <ListGroup>
          {workCompleted.map((item, index) => (
            <ListGroup.Item key={index}>{item.workerName}: {item.taskDescription} ({item.hoursWorked} hours)</ListGroup.Item>
          ))}
        </ListGroup>

        <Card.Title as="h4" className="mt-3"><FontAwesomeIcon icon={faWrench} /> Materials Used:</Card.Title>
        <ListGroup>
          {materialsUsed.map((item, index) => (
            <ListGroup.Item key={index}>{item.materialName} ({item.quantity})</ListGroup.Item>
          ))}
        </ListGroup>

        <Card.Title as="h4" className="mt-3"><FontAwesomeIcon icon={faTools} /> Equipment Used:</Card.Title>
        <ListGroup>
          {equipmentUsed.map((item, index) => (
            <ListGroup.Item key={index}>{item.equipmentName} ({item.hoursUsed} hours)</ListGroup.Item>
          ))}
        </ListGroup>

        <Card.Title as="h4" className="mt-3"><FontAwesomeIcon icon={faCloudSun} /> Weather Conditions:</Card.Title>
        <Card.Text>
          Temperature: {weather.temperature}°F, Conditions: {weather.conditions}
        </Card.Text>

        <Card.Title as="h4" className="mt-3"><FontAwesomeIcon icon={faClock} /> Delays:</Card.Title>
        <ListGroup>
          {delays.map((item, index) => (
            <ListGroup.Item key={index}>{item.description} (Duration: {item.duration} hours)</ListGroup.Item>
          ))}
          </ListGroup>

        <Card.Title as="h4" className="mt-3"><FontAwesomeIcon icon={faExclamationTriangle} /> Safety Incidents:</Card.Title>
        <ListGroup>
          {safetyIncidents.map((item, index) => (
            <ListGroup.Item key={index}>{item.description} (Severity: {item.severity})</ListGroup.Item>
          ))}
        </ListGroup>

        <Card.Title as="h4" className="mt-3"><FontAwesomeIcon icon={faCommentAlt} /> Communications:</Card.Title>
        <ListGroup>
          {communications.map((item, index) => (
            <ListGroup.Item key={index}>{item.messageType}: {item.messageContent}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};


export default DailyLogItem;





