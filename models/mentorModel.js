const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // other mentor fields
});

module.exports = mongoose.model('Mentor', mentorSchema);
