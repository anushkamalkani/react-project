const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
  Task.find()
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const username = req.body.username;
  const task = req.body.task;
  const project = req.body.project;
  const startdate = Date.parse(req.body.startdate);
  const enddate = Date.parse(req.body.enddate);

  $: newTask = new newTask({
    username,
    task,
    project,
    startdate,
    enddate
   
  });

  newTask.save()
  .then(() => res.json('Task added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Post request for Project
router.route('/add/project').post((req, res) => {
  const project = req.body.project;

  const newProject = new newProject({
  
    project,
   
  });

  newProject.save()
  .then(() => res.json('Project added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      task.username = req.body.username;
      task.task = req.body.task;
      task.project = req.body.project;
      task.startdate = Date.parse(req.body.startdate);
      task.enddate = Date.parse(req.body.enddate);

      task.save()
        .then(() => res.json('task updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;