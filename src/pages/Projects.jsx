import { projects } from "../data/projects";
import Project from "../components/Project";
import Contact from "./Contact";

const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>
      <div className=" project-container">
      {projects.map(project => (
        <Project key={project.title} project={project} />
      ))}
      </div>
      {/* <Contact /> */}
    </>
  );
}

export default Projects;