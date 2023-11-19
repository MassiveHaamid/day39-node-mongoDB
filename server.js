const express = require('express');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

logger.info('Connecting to', config.MONGO_URI);
mongoose.connect(config.MONGO_URI)
.then(() => {
    logger.info('Connected to MongoDB...');
})
.catch((err) => {
    logger.error('Error connecting to MongoDB', err);
});

// Routes
const mentorRoutes = require('./controllers/mentorController');
const studentRoutes = require('./controllers/studentController');
const assignmentRoutes = require('./controllers/assignmentController');

app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);
app.use('/assignments', assignmentRoutes);

module.exports = app;
