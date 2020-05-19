const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        username: { type: String, required: true },
        task: { type: String, required: true },
        project: { type: String, required: true },
        startdate: { type: String, required: true },
        enddate: { type: String, required: true }


    },
    {
        timestamps: true,

    }
);

 const newTask= mongoose.model('Task', taskSchema);

module.exports = newTask;