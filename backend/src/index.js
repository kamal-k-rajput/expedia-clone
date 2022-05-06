let express = require('express');
let app = express();
let cors = require('cors')

app.use(cors())

const flightController = require("./controller/flight.controller");
const hotelController = require("./controller/hotel.controller");
const numController = require("./controller/num.controller");
const strController = require("./controller/str.controller");

app.use("/flight", flightController)
app.use("/hotel", hotelController)
app.use("/num", numController)
app.use("/str", strController)

app.get("/", (req, res)=>{
    res.send("Hello It's Harsh unit5-expedia-backend")
})

module.exports = app;
