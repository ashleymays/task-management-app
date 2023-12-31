/**
 * Wraps an asynchronous function in a try-catch block.
 * @param { function } asyncFunction
 * @returns { function }
 */
const catchAsyncErrors = (asyncFunction) => {
  return async (req, res, next) => {
    try {
      return await asyncFunction(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { catchAsyncErrors };
