import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { PROJECTS_QUERY } from '../../utils/queries';
import ProjectItem from './ProjectItem';
import ProjectForm from './ProjectForm';

const ProjectList = ({ companyId }) => {
  const { loading, error, data, refetch } = useQuery(PROJECTS_QUERY, {
    variables: { companyId },
  });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFinished = () => {
    setSelectedProject(null);
    refetch();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Projects</h2>
      {data.projects.map((project) => (
        <ProjectItem
          key={project._id}
          project={project}
          onEdit={() => setSelectedProject(project)}
        />
      ))}
      <h3>{selectedProject ? 'Edit Project' : 'Add Project'}</h3>
      <ProjectForm project={selectedProject} companyId={companyId} onFinished={handleFinished} />
    </div>
  );
};

export default ProjectList;
