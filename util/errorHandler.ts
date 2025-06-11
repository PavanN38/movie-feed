export {};
const ApiError = require('./createError');


function notFoundHandler(req, res, next) {
  next(new ApiError(404, 'Resource not found'));
}


function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    const { statusCode, message, details } = err;
    const errorPayload: any = { success: false, error: { message } };
    if (details) errorPayload.error.details = details;
    return res.status(statusCode).json(errorPayload);
  }
  console.error(err);
  return res.status(500).json({
    success: false,
    error: { message: 'Internal server error' },
  });
}

module.exports = {
  notFoundHandler,
  errorHandler,
};