// import React from 'react';
// import { useMutation } from '@apollo/client';
// import { DELETE_PROJECT } from '../../utils/mutations';

// const ProjectItem = ({ project, onEdit }) => {
//   const [deleteProject] = useMutation(DELETE_PROJECT);

//   const handleDelete = async () => {
//     try {
//       await deleteProject({ variables: { _id: project._id } });
//       console.log('Project deleted successfully');
//       // Perform any additional actions after successful deletion
//     } catch (error) {
//       console.error('Error deleting project:', error);
//     }
//   };

//   return (
//     <div>
//       <h4>{project.name}</h4>
//       <button onClick={() => onEdit()}>Edit</button>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// export default ProjectItem;
import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../utils/mutations';

const ProjectItem = ({ project, onEdit, onClick, refetchProjects }) => {
  const [deleteProject] = useMutation(DELETE_PROJECT);

  const handleDelete = async () => {
    try {
      await deleteProject({ variables: { _id: project._id } });
      console.log('Project deleted successfully');
      refetchProjects(); // Refetch projects list after successful deletion
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div>
      <h4 onClick={onClick}>{project.name}</h4> {/* Add onClick handler */}
      <button onClick={() => onEdit(project._id)}>Edit</button> {/* Pass project._id */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProjectItem;

