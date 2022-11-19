import Project from "../models/project.model.js";
// import { handleError } from "../helper.js";

const projectController = {
  getAllProjects,
  createProject,
  updateProject,
};

async function getAllProjects(request, response) {
  const projects = await Project.find();
  return response.end(JSON.stringify(projects));
}

function createProject(request, response) {
  Project.create(request.body);
  return response.end("Create new project successfully");
}

async function updateProject(request, response) {
  const projectId = request.params.id;
  const updatedProject = await Project.findByIdAndUpdate(projectId);
  return response.end(JSON.stringify(updatedProject));
}

export default projectController;
