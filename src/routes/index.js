const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('index', {
    tasks
  });
});

router.post('/add', async (req, res, next) => {
    const taskPedro = await Task.find({"username":"pedro"});
    const taskFelipe = await Task.find({"username":"felipe"});
    console.log(taskPedro)
    if(taskPedro.money == '0'){
        const taskPedro = await Task.find({"username":"pedro"});
        taskPedro.money == 10;
        console.log('paso aqui')
        await taskPedro.save();
        
    }
    res.redirect('/');
  
});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  console.log(task)
  task.status = !task.status;
  await task.save();
  res.redirect('/');
});
router.get('/asign', async (req, res, next) => {
    let { id } = req.params;
    const tasks = await Task.find();
    const taskPedro = await Task.find({"username":"pedro"});
    const taskFelipe = await Task.find({"username":"felipe"});
    const taskAndrea = await Task.find({"username":"andrea"});
    res.render('index', {
        tasks,taskPedro,taskAndrea,taskFelipe
      });
  });

router.get('/edit/:id', async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  console.log(task)
  res.render('edit', { task });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({_id: id});
  res.redirect('/');
});


module.exports = router;