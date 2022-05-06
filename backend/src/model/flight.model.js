const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
    {
        stime: { type: String, required: false },
        etime: { type: String, required: false },
        dest: { type: String, required: false },
        pname: { type: String, required: false },
        safe: { type: String, required: false },
        price: { type: Number, required: false },
time: {type:String, required:false}
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Flight = mongoose.model("flight",flightSchema);

module.exports = Flight;