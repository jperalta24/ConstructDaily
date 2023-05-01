import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { PROJECTS_QUERY } from "../../utils/queries";
import ProjectForm from "./ProjectForm";
import DisplayLogPage from "../../pages/DailyLogPage"; // Import DisplayLogPage
import ProjectTable from "./Test";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../../utils/mutations";

const ProjectList = ({ userId }) => {
  const { loading, error, data, refetch } = useQuery(PROJECTS_QUERY, {
    variables: { userId },
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectId, setActiveProjectId] = useState(null); // Add this state

  const [deleteProject] = useMutation(DELETE_PROJECT);

  const handleDelete = async (id) => {
    try {
      await deleteProject({ variables: { _id: id } });
      console.log("Project deleted successfully");
      refetch(); // Refetch projects list after successful deletion
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleFinished = () => {
    setSelectedProject(null);
    refetch();
  };

  const handleProjectClick = (projectId) => {
    setActiveProjectId(projectId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // If activeProjectId is set, show DisplayLogPage
  if (activeProjectId) {
    return <DisplayLogPage projectId={activeProjectId} />;
  }

  return (
    <div>
      <h2>Projects</h2>
      <ProjectTable
        data={data.projects}
        onDelete={handleDelete}
        onEdit={setSelectedProject}
        handleProjectClick={handleProjectClick}
      />
      <h3>{selectedProject ? "Edit Project" : "Add Project"}</h3>
      <ProjectForm
        project={selectedProject}
        userId={userId}
        onFinished={handleFinished}
      />
    </div>
  );
};

export default ProjectList;
