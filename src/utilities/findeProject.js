import { projects } from "../data/projects";
import { hyphenateWords } from "./hyphenateWords"

function findProject(str) {
  let project = projects.filter(p => str=== hyphenateWords(p.title))
  console.log(str);
  return project
}

export {findProject}