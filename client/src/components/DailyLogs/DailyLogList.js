import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import DailyLogItem from "./DailyLogItem";
import { DAILY_LOGS_QUERY } from "../../utils/queries";

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
  const projectName = dailyLogs.length ? dailyLogs[0].project.name : "";
  return (
    <Container className="daily-log-list">
      <Row>
        <Col>
          <h2>{projectName ? projectName : "Daily Logs"}</h2>
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
