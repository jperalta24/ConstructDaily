import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT, UPDATE_PROJECT } from '../../utils/mutations';
import Button from 'react-bootstrap/Button';

const ProjectForm = ({ project = null, userId, onFinished }) => {
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
    console.log(formData)
    console.log(project)
    try {
      const variables = isNewProject
        ? { ...formData, userId }
        : { _id: project._id, name: formData.name, userId };
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
      <Button variant='primary' type="submit">{isNewProject ? 'Create Project' : 'Update Project'}</Button>
    </form>
  );
};

export default ProjectForm;
