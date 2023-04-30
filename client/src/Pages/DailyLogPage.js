import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import DailyLogForm from '../components/DailyLogs/DailyLogForm';
import DailyLogList from '../components/DailyLogs/DailyLogList';
import { DAILY_LOGS_QUERY } from '../utils/queries';
import { CREATE_DAILYLOG } from '../utils/mutations';
import { Container, Button, Row, Col,} from 'react-bootstrap';

const styles = {
  container: {
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
    // backgroundColor: 'white',
    color: 'black',
    maxWidth: 800,
    margin: 'auto',
    textAlign: 'center',
    // media query for screens smaller than 768px
    '@media (maxwidth: 768px)': {
      flexDirection: 'column-reverse',
    },
  },
  // more styles here
};


const DisplayLogPage = ({ projectId }) => {
  const [showForm, setShowForm] = useState(false);
  const { loading, error, data, refetch} = useQuery(DAILY_LOGS_QUERY, {
    variables: { projectId },
  });

  const [createDailyLog, { error: createError }] = useMutation(CREATE_DAILYLOG);

  const handleDailyLogSubmit = async (dailyLogData) => {
    try {
      console.log("Project ID:", projectId); // Log the projectId
      console.log("Daily Log Data:", dailyLogData); // Log the dailyLogData
  
      const { data } = await createDailyLog({ variables: { ...dailyLogData, projectId } });
      // No need to update the local state as the Apollo cache will handle it automatically
      setShowForm(false);
      refetch();
    } catch (error) {
      console.error("Error creating daily log:", error);
    }
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container className="construction-theme" style={styles.container}>
      <h2 className='daily-log'>Daily Logs</h2>
      <Row>
        <Col className="scrollable-column">
          <DailyLogList projectId={projectId} />
        </Col>
        <Col>
          <Button
            onClick={() => setShowForm(true)}
            className="btn btn-primary mt-3"
          >
            Create Form
          </Button>
          {showForm && (
            <DailyLogForm onSubmit={handleDailyLogSubmit} project={projectId} />
          )}
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
  
};

export default DisplayLogPage;
