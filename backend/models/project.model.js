const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const ProjectSchema = new Schema(
    { Project: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
},
    {
        timestamps: true,

    }
);

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;