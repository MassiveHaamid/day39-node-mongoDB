const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentorModel');
const logger = require('../utils/logger');

// Create a new mentor
router.post('/', async (req, res) => {
    try {
        const { name, expertise, experience, email } = req.body;
        const mentor = new Mentor({ name, expertise, experience, email });
        await mentor.save();
        res.status(201).json(mentor);
    } catch (error) {
        logger.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
