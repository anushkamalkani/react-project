const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/project').get((req, res) => {
  Project.find()
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add/project').post((req, res) => {
  const project = req.body.project;

  const newProject = new Project({project});

  newProject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err))
    
});

module.exports = router;