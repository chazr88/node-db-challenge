const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();


//####################################################
//Get and Post for Projects
//###################################################
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get projects' });
    }
});

router.post('/', async (req, res) => {
    const projectData = req.body;
    try {
        const project = await Projects.add(projectData);
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
//#########################################################



//############################################
//Get and Post for Tasks
//##########################################
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Projects.findTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get tasks' });
    }
});

router.post('/tasks', async (req, res) => {
    const taskData = req.body;
    try {
        const task = await Projects.addTask(taskData);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
//#############################################


router.get('/resources', async (req, res) => {
    try {
        const resources = await Projects.findResources();
        res.json(resources);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get resources' });
    }
});

router.post('/resources', async (req, res) => {
    const resourceData = req.body;
    try {
        const resource = await Projects.addResource(resourceData);
        res.status(201).json(resource);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

  module.exports = router;
  