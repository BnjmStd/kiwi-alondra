/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates license number format (basic validation)
 */
export const isValidLicense = (license: string): boolean => {
  return license.length >= 4 && /^[a-zA-Z0-9]+$/.test(license);
};

/**
 * Sanitizes input text to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};

/**
 * Validates that a string contains only numeric characters
 */
export const isNumericString = (str: string): boolean => {
  return /^\d*\.?\d+$/.test(str) && !isNaN(parseFloat(str));
};