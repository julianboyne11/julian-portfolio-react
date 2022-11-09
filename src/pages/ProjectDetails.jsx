import { projects } from "../data/projects";
import { findProject } from "../utilities/findeProject";
import { hyphenateWords } from "../utilities/hyphenateWords";
import { useParams } from "react-router-dom";


const ProjectDetails = (props) => {
  let project = useParams(hyphenateWords(props.project))
  return (  
    <>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <img src={project.image} alt="img" />
    <button>Github Repo</button>
    <button>App</button>
    </>
  );
}

export default ProjectDetails;