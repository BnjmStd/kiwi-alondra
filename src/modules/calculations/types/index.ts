export interface CalculationInput {
  medicationId: string;
  patientWeight: number;
  prescribedDose: number;
  prescribedUnit: string;
}

export interface CalculationResult {
  infusionRate: number;
  infusionUnit: string;
  dilutionInstructions: string;
  totalVolume: number;
  medicationAmount: number;
  isWithinRange: boolean;
  warnings: string[];
}

export interface DosageValidation {
  isValid: boolean;
  message: string;
  severity: 'low' | 'medium' | 'high';
}