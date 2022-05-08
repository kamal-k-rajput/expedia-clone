let express = require("express");
let app = express();
let cors = require("cors");

const { register, login } = require('./controller/auth');
const passport = require('./config/google-auth');

app.use(cors());

const flightController = require("./controller/flight.controller");
const hotelController = require("./controller/hotel.controller");
const numController = require("./controller/num.controller");
const strController = require("./controller/str.controller");
const thingsController = require("./controller/things.controller");


app.use("/flight", flightController);
app.use("/hotel", hotelController);
app.use("/num", numController);
app.use("/str", strController);
app.use("/things", thingsController);
app.use('/login', login);
app.use('/register', register);



passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/auth/google/failure",
        successRedirect: 'http://127.0.0.1:5500/home.html',
    }),
    (req, res) => {
        const { user } = req;
        const token = newToken(user);

        return res.send({ user, token });
    }
);


app.get("/", (req, res) => {
    res.send("Hello It's Harsh unit5-expedia-backend");
});

module.exports = app;