import { HttpStatus } from "../enums/constants"; // Assuming 'constants' module defines error codes

interface ErrorResponse {
  title: string;
  message: string;
  status: number;
  stackTrace?: string; // Optional property for stack trace
}

const errorHandler = (err: any, req: any, res: any, next: any) => {
  const statusCode = res.statusCode ?? 500; // Use nullish coalescing operator for default

  switch (statusCode) {
    case HttpStatus.VALIDATION_ERROR:
      res.json({
        title: "Validation error",
        message: err.message,
        status: statusCode,
        stackTrace: err.stack, // Include optional stack trace
      } as ErrorResponse);
      break;
    case HttpStatus.FORBIDDEN:
      res.json({
        title: "Forbidden request error",
        message: err.message,
        status: statusCode,
        stackTrace: err.stack,
      } as ErrorResponse);
      break;
    // ... other cases similar to above
    default:
      console.log("No error, all good");
      break;
  }
};

export default errorHandler;
