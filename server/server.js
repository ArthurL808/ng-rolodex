const express = require("express");
const bodyParser = require("body-parser");
const dbDecorator = require("./database/decorator");
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')
const redis = require('redis')
const RedisStore = require('connect-redis')(session)
const api = require('./routes/api/index')
const PORT = 8080;

const User = require('./database/models/User')
require('dotenv').config();

let client = redis.createClient({url: process.env.REDIS_URL});
const app = express();

app.use(bodyParser.json());
app.use(dbDecorator);

app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(
    new LocalStrategy(function(username, password, done) {
      return new User({ username: username })
        .fetch()
        .then(user => {
          console.log('this is the user:',user);
  
          if (user === null) {
            return done(null, false, { message: "bad username or password" });
          } else {
            user = user.toJSON();
  
            bcrypt.compare(password, user.password).then(res => {
              // Happy route: username exists, password matches
              if (res) {
                return done(null, user); //this is the user that goes to serialize
              }
              // Error Route: Username exists, password does not match
              else {
                return done(null, false, { message: "bad username or password" });
              }
            });
          }
        })
        .catch(err => {
          console.log("error: ", err);
          return done(err);
        });
    })
  );
  
  passport.serializeUser(function(user, done) {
    console.log("serializing");
  
    return done(null, { id: user.id, username: user.username });
  });
  
  passport.deserializeUser(function(user, done) {
    console.log("deserializing");
    console.log(user);
    return done(null, user);
  });

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/login.html");
  }
}

app.use('/api', api.auth)
app.use("/api/contacts",isAuthenticated, api.contacts)
app.use("/api/users", api.users)
app.use('/api', api.users)


app.listen(PORT, () => {
  console.log(`server started on PORT:${PORT}`);
});
