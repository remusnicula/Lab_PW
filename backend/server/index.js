const express = require('express');
const mongoose = require('mongoose');
const Project = require('./models/Project.js');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
mongoose.connect('mongodb://localhost:27017/dashboard')
  .then(function() { console.log('Conectat la MongoDB!'); })
  .catch(function(err) { console.error('Eroare:', err); });

app.use(express.json());
 
app.get('/api/projects', async function(req, res) {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

 
app.get('/api/projects/:id', async function(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

 
app.post('/api/projects', async function(req, res) {
  try {
    const newProject = new Project({
      title: req.body.title,
      tech: req.body.tech,
      done: req.body.done || false,
    });
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

 
app.delete('/api/projects/:id', async function(req, res) {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Sters' });
  } catch (err) { 
    res.status(500).json({ error: err.message });
  }
});
app.put('/api/projects/:id', async function(req, res) {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, function() {
  console.log('Server pornit pe http://localhost:' + PORT);
});