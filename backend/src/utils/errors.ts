export class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode = 500,
    public readonly code = "APP_ERROR",
    public readonly expose = false
  ) {
    super(message);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, "VALIDATION_ERROR", true);
  }
}

export class AIConfigurationError extends AppError {
  constructor(message: string) {
    super(message, 503, "AI_CONFIGURATION_REQUIRED", true);
  }
}

export class AIProviderError extends AppError {
  constructor(message: string) {
    super(message, 502, "AI_PROVIDER_ERROR", true);
  }
}
