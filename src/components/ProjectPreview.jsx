import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  return ( 
    <ul>
      <h2>
        {props.project.title}
      </h2>
      <img src={props.project.image} alt="App" />
      <Link to={`/projects/${hyphenateWords(props.project.title)}`} project={props.project}><button>Learn more</button></Link>
    </ul>
  );
}

export default ProjectPreview;