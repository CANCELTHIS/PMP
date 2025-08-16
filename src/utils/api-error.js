class ApiError extends Error {
  constructor(
    statusCode,
    data = null,
    message = "Something went wrong",
    errors = [],
    stack = "",
  ) {
    super(message);

    this.statusCode = statusCode;
    this.data = data;
    this.success = false;
    this.errors = errors;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

export { ApiError };
