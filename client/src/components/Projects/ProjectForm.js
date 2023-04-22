import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT, UPDATE_PROJECT } from '../../utils/mutations';

const ProjectForm = ({ project = null, companyId, onFinished }) => {
  const isNewProject = project === null;
  const [formData, setFormData] = useState({
    name: project?.name || '',
  });

  const [saveProject] = useMutation(isNewProject ? CREATE_PROJECT : UPDATE_PROJECT);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const variables = isNewProject
        ? { ...formData, companyId }
        : { _id: project._id, ...formData };
      await saveProject({ variables });
      onFinished();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Project name"
      />
      <button type="submit">{isNewProject ? 'Create Project' : 'Update Project'}</button>
    </form>
  );
};

export default ProjectForm;
