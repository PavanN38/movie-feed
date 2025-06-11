export {};
const ApiError = require('./createError');


function success(res, data, meta) {
  const payload: any = { success: true, data };
  if (meta) payload.meta = meta;
  return res.json(payload);
}


function badRequest(message, details) {
  throw new ApiError(400, message, details);
}

module.exports = {
  success,
  badRequest,
};