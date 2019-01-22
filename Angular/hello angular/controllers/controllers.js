var Task = require('../models/users');

module.exports = {
  tasks: function(req, res){
    Task.find({}, function(err,tasks){
      res.json({err: err, tasks: tasks});
    });
  },
  new: function(req, res){
    console.log('notcreated')
    var task = new Task({title: req.body.title, description: req.body.description});
    task.save(function(err, task) {
      console.log('created')
      res.json({err: err, task: task});
    });
  },
  delete: function(req, res){
    Task.findByIdAndRemove(req.params.id, function(err,task){
      res.json({err: err, task: task});
    });
    
  },
  task_id: function(req, res){
    Task.findById(req.params.id, function(err,task){
      res.json({err: err, task: task});
    });
  },
  task_update_id: function(req, res){
    console.log("enterUpdate")
    Task.findByIdAndUpdate(req.params.id, {title: req.body.title, description: req.body.description}, function(err,task){
      console.log('updated')
      console.log(req.params)
      console.log(req.body)
      res.json({err: err, task: task});
    });
  },
  createTask: function(req, res){
    Task.create({}, function(err, ninjas){
      console.log('task created');
      });
  }
}