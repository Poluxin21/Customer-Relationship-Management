const Project = require('../models/project');

exports.getAllProjects = async () => {
  return await Project.find().populate('customer');
};

exports.getProjectById = async (id) => {
  return await Project.findById(id).populate('customer');
};

exports.createProject = async (projectData) => {
  const project = new Project(projectData);
  await project.save();
  return project;
};

exports.updateProject = async (id, projectData) => {
  const project = await Project.findByIdAndUpdate(id, projectData, { new: true, runValidators: true }).populate('customer');
  return project;
};

exports.deleteProject = async (id) => {
  const project = await Project.findByIdAndDelete(id);
  return project;
};
