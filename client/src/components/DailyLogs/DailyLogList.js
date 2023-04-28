import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import DailyLogItem from './DailyLogItem';
import {DAILY_LOGS_QUERY} from '../../utils/queries';

const DailyLogList = ({ projectId }) => {
  const [dailyLogs, setDailyLogs] = useState([]);
  const { loading, error, data } = useQuery(DAILY_LOGS_QUERY, {
    variables: { projectId },
  });

  useEffect(() => {
    if (data) {
      setDailyLogs(data.dailyLogs);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container className="daily-log-list">
      <Row>
        <Col>
          <h2>Daily Logs</h2>
          {dailyLogs.length ? (
            dailyLogs.map((dailyLog) => (
              <DailyLogItem key={dailyLog._id} dailyLog={dailyLog} />
            ))
          ) : (
            <Card>
              <Card.Body>
                <Card.Text>No daily logs found.</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DailyLogList;




// Your DailyLogList.js will be a React component responsible for fetching and displaying a list of daily log entries. It will call an API (using GraphQL queries, for example) to fetch daily log data and render a DailyLogItem component for each entry in the list. Here's a basic example of what the DailyLogList.js component could look like:
// In this example, the DailyLogList component takes a projectId prop to fetch daily logs for a specific project. It uses the useQuery hook from the @apollo/client package to execute the GraphQL query for fetching daily log data. Once the data is fetched, the component sets the dailyLogs state with the received data, and renders a DailyLogItem component for each daily log entry in the list.

// Remember to replace YOUR_GRAPHQL_QUERY with the actual GraphQL query you'll be using to fetch daily logs for the given project.

//  You can customize this component as needed by adding or modifying the displayed details, implementing additional functionality (e.g., filtering or sorting daily logs), or styling the component elements.