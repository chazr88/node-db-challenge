const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get projects' });
    }
});

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
  

  module.exports = router;
  