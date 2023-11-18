const express = require('express');
const bodyParser = require('body-parser');
const config = require('./utils/config');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const mentorRoutes = require('./controllers/mentorController');
const studentRoutes = require('./controllers/studentController');
const assignmentRoutes = require('./controllers/assignmentController');

app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);
app.use('/assignments', assignmentRoutes);

module.exports = app;
