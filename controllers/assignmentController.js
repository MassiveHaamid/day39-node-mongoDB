const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');
const Mentor = require('../models/mentorModel');
const logger = require('../utils/logger');

// Assign a student to a mentor
router.post('/assign/:mentorId/:studentId', async (req, res) => {
    try {
        const { mentorId, studentId } = req.params;
        const mentor = await Mentor.findById(mentorId);
        const student = await Student.findById(studentId);

        if (!mentor || !student) {
            return res.status(404).json({ msg: 'Mentor or student not found' });
        }

        mentor.students.push(studentId);
        student.mentor = mentorId;

        await mentor.save();
        await student.save();

        res.status(200).json({ msg: 'Assignment successful' });
    } catch (error) {
        logger.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
