const httpStatusResponse = (code, statusMessage, errorLocation) => ({
  statusCode: (code || 501),
  body: (statusMessage || 'Parameters not send to http request'),
  localization: (errorLocation || 'Not found error location')
});

module.exports = httpStatusResponse;
