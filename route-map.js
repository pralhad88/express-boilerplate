var { AUTH_USER } = require("./src/common/authrizor");

const route_map = [
  { path: "/", route_file: "./src/routes/index" },
  { path: "/auth", route_file: "./src/routes/auth" },
  { path: "/policies", route_file: "./src/routes/policies", middleware: [AUTH_USER] },
  {path: "/user", route_file: "./src/routes/user"}
];

module.exports = route_map;
