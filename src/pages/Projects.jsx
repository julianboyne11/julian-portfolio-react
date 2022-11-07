import { projects } from "../data/projects";
import Project from "../components/Project";

const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>
      <div className=" project-container">
      {projects.map(project => (
        <Project project={project} />
      ))}
      </div>
    </>
  );
}

export default Projects;