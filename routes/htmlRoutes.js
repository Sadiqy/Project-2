var path = require("path");
const router = require("express").Router();


// Index route loads index.html/ejs
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});

// Match route loads matches.html/ejs
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/matches.html"));
});

// Newacc route loads newacc.html/ejs
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/newacc.html"));
});

// Question route loads questions.html/ejs
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/questions.html"));
});

// Signup route loads signup.html/ejs
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/signup.html"));
});
