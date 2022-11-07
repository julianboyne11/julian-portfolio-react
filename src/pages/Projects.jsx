import { projects } from "../data/projects";

const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>
      {projects.map(project => (
        <ul>
          <h2>
            {project.title}
          </h2>
          <img src={project.image} alt="App" />
          <p>{project.description}</p>
          <a href={project.repositoryLink}>Git Hub</a>
          <a href={project.deploymentLink}>App</a>
          {project.groupMembers?.map(member => (
            <p>{member}</p>
          ))}
        </ul>
      ))}
    </>
  );
}

export default Projects;