/**
 * Validates if a number is within a given range
 */
export const isWithinRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * Rounds a number to specified decimal places
 */
export const roundToDecimals = (value: number, decimals: number = 2): number => {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

/**
 * Validates if a weight is within reasonable limits for medical calculations
 */
export const isValidWeight = (weight: number): boolean => {
  return weight > 0 && weight <= 300; // 300kg as upper limit
};

/**
 * Validates if a dose is a positive number
 */
export const isValidDose = (dose: number): boolean => {
  return dose > 0 && dose < 1000; // Reasonable upper limit
};

/**
 * Formats a number for display with appropriate precision
 */
export const formatNumber = (value: number, maxDecimals: number = 2): string => {
  return value % 1 === 0 ? value.toString() : value.toFixed(maxDecimals);
};

/**
 * Converts concentration from one unit to another (basic conversion)
 */
export const convertConcentration = (
  value: number, 
  fromUnit: string, 
  toUnit: string
): number => {
  // Basic mcg/mg conversions - extend as needed
  if (fromUnit === 'mg/mL' && toUnit === 'mcg/mL') {
    return value * 1000;
  }
  if (fromUnit === 'mcg/mL' && toUnit === 'mg/mL') {
    return value / 1000;
  }
  return value;
};