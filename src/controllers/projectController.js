const ProjectService = require('../services/projectService');

exports.getProjects = async (req, res, next) => {
  try {
    const projects = await ProjectService.getAllProjects();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};

exports.getProjectById = async (req, res, next) => {
  try {
    const project = await ProjectService.getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

exports.createProject = async (req, res, next) => {
  try {
    const project = await ProjectService.createProject(req.body);
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const project = await ProjectService.updateProject(req.params.id, req.body);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const project = await ProjectService.deleteProject(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted' });
  } catch (err) {
    next(err);
  }
};
