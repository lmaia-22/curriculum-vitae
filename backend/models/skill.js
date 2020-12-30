const mongoose = require('mongoose');
const skillSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    level: { type: Number, required: false }
});
module.exports = mongoose.model('Skill', skillSchema);