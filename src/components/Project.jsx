const Project = ({project}) => {
  return ( 
    <ul>
    <h2>
      {project.title}
    </h2>
    <img src={project.image} alt="App" />
    <p>{project.description}</p>
    <a className="project-link" href={project.repositoryLink}>Git Hub</a><br />
    <a className="project-link" href={project.deploymentLink}>App</a>
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
  </ul>
  );
}

export default Project;