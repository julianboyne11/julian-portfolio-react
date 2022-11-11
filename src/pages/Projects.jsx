import { projects } from "../data/projects";
import Project from "../components/Project";


const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>
      <hr className="title"/><br /><br />
      <div className=" project-container">
      {projects.map(project => (
        <Project key={project.title} project={project} />
      ))}
      </div>
    </>
  );
}

export default Projects;