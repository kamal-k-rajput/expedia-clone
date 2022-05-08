const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const User = require('../model/user.model');


var uuid = require('uuid-random');





passport.use(new GoogleStrategy({
        clientID: '561239766821-u4lu5apam4lnpdogk716m3lpk1nb36m4.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: "http://localhost:2323/auth/google/callback",
        passReqToCallback: true
    },
    async function(request, accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return done(err, user);
        // });

        let user = await User.findOne({ email: profile.email });

        if (!user) {

            user = await User.create({
                email: profile.email,
                password: uuid(),
                firstname: profile._json.given_name,
                surname: profile._json.given_name
            })
        }
        console.log(profile._json.given_name);
        return done(null, user)
    }
));

module.exports = passport;