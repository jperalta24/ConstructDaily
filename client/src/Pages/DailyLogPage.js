import React, { useState } from 'react';
import DailyLogForm from '../components/DailyLogs/DailyLogForm';
import DailyLogItem from '../components/DailyLogs/DailyLogItem';
import DailyLogList from '../components/DailyLogs/DailyLogList';

const DisplayLogPage = () => {
  const [dailyLogs, setDailyLogs] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleDailyLogSubmit = (dailyLog) => {
    setDailyLogs([...dailyLogs, dailyLog]);
    setShowForm(false);
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Daily Log Page</h1>
      <DailyLogList dailyLogs={dailyLogs} />
      <button
        onClick={() => setShowForm(true)}
        className="btn btn-primary mt-3"
        >Create Form
      </button>
      {showForm && <DailyLogForm onSubmit={handleDailyLogSubmit} />}
      <DailyLogItem />
    </div>
  );
};

export default DisplayLogPage;