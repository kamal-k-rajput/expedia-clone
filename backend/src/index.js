const express = require('express');
const connect = require('./configs/db');
const userController = require('./controllers/user.controller')
const { register, login } = require('./controllers/auth');
const passport = require('./configs/google-auth');
const app = express();


app.use(express.json());
app.use('/users', userController);

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



app.listen(2323, async() => {
    try {
        connect();
        console.log("server started 3434")
    } catch (err) {
        console.log(err.message);
    }
})