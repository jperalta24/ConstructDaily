import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import DailyLogForm from '../components/DailyLogs/DailyLogForm';
import DailyLogList from '../components/DailyLogs/DailyLogList';
import { DAILY_LOGS_QUERY } from '../utils/queries';
import { CREATE_DAILYLOG } from '../utils/mutations';

const DisplayLogPage = ({ projectId }) => {
  const [showForm, setShowForm] = useState(false);
  const { loading, error, data } = useQuery(DAILY_LOGS_QUERY, {
    variables: { projectId },
  });

  const [createDailyLog, { error: createError }] = useMutation(CREATE_DAILYLOG);

  const handleDailyLogSubmit = async (dailyLogData) => {
    try {
      const { data } = await createDailyLog({ variables: { ...dailyLogData, projectId } });
      // No need to update the local state as the Apollo cache will handle it automatically
      setShowForm(false);
    } catch (error) {
      console.error("Error creating daily log:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Daily Log Page</h1>
      <DailyLogList projectId={projectId} />
      <button
        onClick={() => setShowForm(true)}
        className="btn btn-primary mt-3"
        >Create Form
      </button>
      {showForm && <DailyLogForm onSubmit={handleDailyLogSubmit} project={projectId} />}

    </div>
  );
};

export default DisplayLogPage;
