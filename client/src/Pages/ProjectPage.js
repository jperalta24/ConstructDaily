import React, { useState } from 'react';
// import {
//   Container,
//   Card,
//   Button,
//   Row,
//   Col
// } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { PROJECTS_QUERY } from '../utils/queries';
// import ProjectItem from '../components/Projects/ProjectItem';
// import ProjectForm from '../components/Projects';
// import ProjectList from '../components/Projects/ProjectList';
import { ProjectForm, ProjectList } from '../components/Projects'

const ProjectPage = ({ companyId }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { loading, error, data } = useQuery(PROJECTS_QUERY, { variables: { companyId } });

  const handleEdit = (project) => {
    setSelectedProject(project);
  };

  const handleFinish = () => {
    setSelectedProject(null);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm); // Toggle the showForm state
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Project Page</h1>
      <ProjectList projects={data.getProjects} handleEdit={handleEdit} />
      <h2>{selectedProject ? 'Edit Project' : 'Create Project'}</h2>
      {/* Render the ProjectForm component based on showForm state */}
      {showForm ? (
        <ProjectForm project={selectedProject} companyId={companyId} onFinished={handleFinish} />
      ) : (
        <button onClick={handleToggleForm}>Add Project</button>
      )}
    </div>
  );
};

export default ProjectPage;