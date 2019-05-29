module.exports = function(req, res, next) {
  // if user logged in
  if (req.user) {
    return next();
  }
  // if user not logged in
  return res.redirect("/");
};
