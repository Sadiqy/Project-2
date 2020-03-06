let express = require("express");
let PORT = process.env.PORT || 8080;
let db = require("./models");
const apiRoute = require("./routes/apiRoutes");
// const htmlRoute = require("./routes/htmlRoutes");

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring our routes
app.use("/api", apiRoute);
// undo bottom comment for front-end routes. MAKE SURE TO IMPORT HTML ROUTES AS htmlRoute.
// app.use("/", htmlRoute)


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
