const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    expertise: { type: String }, // Mentor's area of expertise
    experience: { type: Number }, // Years of experience
    email: { type: String, unique: true, required: true }, // Email for uniqueness
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }], // Array of assigned students
});

module.exports = mongoose.model('Mentor', mentorSchema);
