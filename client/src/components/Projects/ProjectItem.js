import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../utils/mutations';

const ProjectItem = ({ project, onEdit }) => {
  const [deleteProject] = useMutation(DELETE_PROJECT);

  const handleDelete = async () => {
    try {
      await deleteProject({ variables: { _id: project._id } });
      console.log('Project deleted successfully');
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div>
      <h4>{project.name}</h4>
      <button onClick={() => onEdit()}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProjectItem;
