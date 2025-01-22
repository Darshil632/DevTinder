const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status("401").send("Unauthorized admin");
  } else next();
};
const userauth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status("401").send("Unauthorized admin");
  } else next();
};
module.exports = { adminAuth, userauth };
