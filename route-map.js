var { AUTH_USER } = require("./src/common/authrizor");
const AUTH_MIDDLEWARE = process.env.DISABLE_AUTH ? [] : [AUTH_USER];

const route_map = [
  { path: "/", route_file: "./src/routes/index" },
  { path: "/auth", route_file: "./src/routes/auth" },
  { path: "/policies", route_file: "./src/routes/policies", middleware: AUTH_MIDDLEWARE }
];

module.exports = route_map;
