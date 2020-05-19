const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timeSchema = new Schema(
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

const Time= mongoose.model('Time', timeSchema);

module.exports = Time;