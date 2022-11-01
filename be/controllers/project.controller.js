import Project from "../models/project.model.js";

const projectController = {
  getAllProjects,
  createProject,
  updateProject,
};

async function getAllProjects(req, res) {
  const projects = await Project.find();
  return res.end(JSON.stringify(projects));
}

function createProject(req, res) {
  Project.create(req.body);
  return res.end("Create new project successfully");
}

async function updateProject(req, res) {
  const projectId = req.params.id;
  const updatedProject = await Project.findByIdAndUpdate(projectId);
  return res.end(JSON.stringify(updatedProject));
}

export default projectController;
