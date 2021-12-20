const AUTH_USER = (req, res, next) => {
  const authHeader = req.headers["x-access-token"] || req.headers["authorization"];
  var token = (authHeader && authHeader.length > 0) ? authHeader.split(' ')[1] : null;
  if (!token && req.query.token ) {
      token = req.query.token;
  }
  if (token) {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = { AUTH_USER };
