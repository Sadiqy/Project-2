var path = require("path");
const router = require("express").Router();
let db = require("../models");


// Index route loads index.html/ejs
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});

// Match route loads matches.html/ejs
router.get("/matches/:users?", function(req, res) {
  console.log(req.params.users)
  db.Users.findOne({ where: { email: req.params.users } })
    .then(function(dbUser) {
      console.log('dbuser',dbUser.email);
      db.Users.findAll({}).then(results=>{
      console.log('results length',results.length)
      console.log(Array.isArray(results));
      console.log(results.filter);
      let matches;
      matches = results.filter(function(user) {
        console.log('email',user.email);
        return (
        Math.abs(dbUser.zipcode - user.dataValues.zipcode) < 5 && 
         user.dataValues.email !== dbUser.email && 
          user.dataValues.fitness_goal === dbUser.fitness_goal
        )
        
      } )
      matches = matches.map(user => user.dataValues);
      console.log('matches',matches)
      res.render("pages/matches", {matches: matches})
    })
    .catch(err => console.log(err));
})
});
//   db.Users.findAll({}).then(results=>{
//       console.log(results)
//       const matches =[];
//       matches = results.map(user=> Math.abs(
//         zipcode - user.dataValues.zipcode) < 5 && 
//         user.dataValues.email !== email && 
//         user.dataValues.fitness_goal === fitness_goal)
//       res.render("pages/matches", {matches: matches})
//   // res.sendFile(path.join(__dirname, "../Public/matches.html"));
//   });
// });

// Newacc route loads newacc.html/ejs
router.get("/newacc", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/newacc.html"));
});

// Question route loads questions.html/ejs
router.get("/questions/:email", function(req, res) {
  console.log('user email',req.params.email)
  res.render('pages/questions', {userEmail: req.params.email})
  // res.sendFile(path.join(__dirname, "../Public/questions.html"));
});

// Signup route loads signup.html/ejs
router.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/signup.html"));
});

module.exports = router;