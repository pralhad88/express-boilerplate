var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
var app = express();
const PORT = 8000;

// Register your modules here
const routeMap = require("./route-map");

//--------------------< Essentials >----------------------//
essentialSetup = () => {
  // view engine setup
  console.log("Essentials setting");
  app.use(cors());
  app.use(bodyParser.json({ limit: process.env.POST_BODY_SIZE_LIMIT }));
  app.use(bodyParser.urlencoded({
      limit: process.env.POST_BODY_SIZE_LIMIT,
      extended: true,
      parameterLimit: 50000,
    })
  );
  app.set("views", path.join(__dirname, "src/views"));
  app.set("view engine", "jade");
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  //NOTE: we deal with JWT, hence cookie not needed
  app.use(express.static(path.join(__dirname, "public")));
  console.log("Essentials init done 👍");
};

//--------------------< Routes >----------------------//
//--------------------------------------------------------//
routesSetup = () => {
  for (let i = 0; i < routeMap.length; i++) {
    const R = routeMap[i];
    console.log(`Initializing ${R.route_file} --> ${R.path}`);
    const router = require(R.route_file);
    if (R.middleware && R.middleware.length > 0) {
      app.use(R.path, function (req, res, next) {
        next();
      }, ...[...R.middleware, router]);
    }
    app.use(R.path, router);
    console.log(`👍`);
  }
};

//------------------< Error Handlers >--------------------//
//--------------------------------------------------------//
errorHandlers = () => {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  console.log("error handlers setup done 👍");
};

essentialSetup()
routesSetup();
errorHandlers()
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});