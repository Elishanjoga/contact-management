const { constants } = require("../constants");

const error_handler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 5000;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation error",
        message: err.message,
        status: res.statusCode,
        stackTrance: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden request error",
        message: err.message,
        status: res.statusCode,
        stackTrance: err.stack,
      });
      break;
    case constants.UNATHORIZED:
      res.json({
        title: "unathorized request error",
        message: err.message,
        status: res.statusCode,
        stackTrance: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "not found",
        message: err.message,
        status: res.statusCode,
        stackTrance: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "server error",
        message: err.message,
        status: res.statusCode,
        stackTrance: err.stack,
      });
      break;
    default:
      console.log("No error, all good");
      break;
  }
};
module.exports = error_handler;
