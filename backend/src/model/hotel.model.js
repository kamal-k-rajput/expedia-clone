const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
    {
        wall: { type: String, required: false },
        img: { type: String, required: false },
        img2: { type: String, required: false },
        img3: { type: String, required: false },
        img4: { type: String, required: false },
        name: { type: String, required: true },
        desc: { type: String, required: true },
        desc2: { type: String, required: false },
        desc3: { type: String, required: false },
        refund: { type: String, required: false },
        reserve: { type: String, required: false },
        rating: { type: Number, required: false },
        rating2: { type: String, required: false },
        tag: { type: String, required: false },     
        rs: { type: Number, required: false },  
        rs1: { type: Number, required: false },  
        srs: { type: Number, required: false }
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Hotel = mongoose.model("hotel",hotelSchema);

module.exports = Hotel;