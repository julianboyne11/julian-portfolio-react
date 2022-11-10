const Project = ({project}) => {
  return ( 
    <ul key={project.title}>
    <h2>
      {project.title}
    </h2>
    <img className="project-img" src={project.image} alt="App" />
    <p id="description">{project.description}</p>
    <div>
      {project.groupMembers?
        <>
          <h3>Members:</h3>
          {project.groupMembers?.map(member => (
            <p className="members">{member}</p>
          ))}
        </>
      :
        <>
        </>
      }
    </div>
    <div className="links">
    <a className="project-link" id='git-hub' href={project.repositoryLink}>Git Hub</a><br />
    <a className="project-link" id='app-link' href={project.deploymentLink}>APP</a>
    </div>
  </ul>
  );
}

export default Project;