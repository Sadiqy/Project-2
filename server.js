let express = require("express");
let PORT = process.env.PORT || 8080;
let db = require("./models");
const apiRoute = require("./routes/apiRoutes");
const expressLayouts = require('express-ejs-layouts');

// const htmlRoute = require("./routes/htmlRoutes");

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//setting the view engine to be ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
// app.use(expressLayouts);

// Requiring our routes
app.use("/api", apiRoute);
// undo bottom comment for front-end routes. MAKE SURE TO IMPORT HTML ROUTES AS htmlRoute.
// app.use("/", htmlRoute)

app.get('/matches', function(req, res){
  let stuff = [{
    email: "foo@bar.com",
    name: "foo bar",
    zipcode: 98120
  },
  {
    email: "zane@json.com",
    name: "Zane Json",
    zipcode: 90016
  }];
  res.render('pages/matches', {matches: stuff})
});


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
