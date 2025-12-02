import { CalculationInput, CalculationResult, DosageValidation } from '@/calculations/types';
import { Medication } from '@/medications/types';

class CalculationService {
  private static instance: CalculationService;
  
  private constructor() {}

  static getInstance(): CalculationService {
    if (!CalculationService.instance) {
      CalculationService.instance = new CalculationService();
    }
    return CalculationService.instance;
  }

  calculateInfusionRate(
    input: CalculationInput, 
    medication: Medication
  ): CalculationResult {
    const { patientWeight, prescribedDose } = input;
    
    // Cálculo básico: (peso kg × dosis mcg/kg/min × 60 min) / concentración mcg/mL
    const totalDosePerHour = patientWeight * prescribedDose * 60;
    const infusionRate = totalDosePerHour / medication.concentration;
    
    // Validar si está dentro del rango
    const isWithinRange = prescribedDose >= medication.dosageRange.min && 
                         prescribedDose <= medication.dosageRange.max;

    // Generar advertencias
    const warnings: string[] = [];
    if (!isWithinRange) {
      if (prescribedDose > medication.dosageRange.max) {
        warnings.push('⚠️ DOSIS SUPERIOR AL RANGO RECOMENDADO');
      } else {
        warnings.push('⚠️ Dosis por debajo del rango terapéutico');
      }
    }

    if (prescribedDose > medication.dosageRange.max * 0.8) {
      warnings.push('⚠️ Dosis alta - Monitoreo estricto requerido');
    }

    // Instrucciones de dilución
    let dilutionInstructions = 'Usar directo de la ampolla';
    let totalVolume = 50; // volumen estándar
    let medicationAmount = 0;

    if (medication.dilution) {
      dilutionInstructions = 
        `Diluir ${medication.dilution.medication} mL de ${medication.name} ` +
        `en ${medication.dilution.diluent} ${medication.dilution.units}`;
      totalVolume = medication.dilution.medication + medication.dilution.diluent;
      medicationAmount = medication.dilution.medication;
    }

    return {
      infusionRate: Math.round(infusionRate * 10) / 10,
      infusionUnit: 'mL/h',
      dilutionInstructions,
      totalVolume,
      medicationAmount,
      isWithinRange,
      warnings
    };
  }

  validateDosage(dose: number, medication: Medication): DosageValidation {
    const { min, max } = medication.dosageRange;
    
    if (dose < min) {
      return {
        isValid: false,
        message: `Dosis por debajo del mínimo recomendado (${min} ${medication.dosageRange.unit})`,
        severity: 'medium'
      };
    }
    
    if (dose > max) {
      return {
        isValid: false,
        message: `Dosis superior al máximo recomendado (${max} ${medication.dosageRange.unit})`,
        severity: 'high'
      };
    }
    
    if (dose > max * 0.8) {
      return {
        isValid: true,
        message: 'Dosis alta - Requiere monitoreo estricto',
        severity: 'medium'
      };
    }
    
    return {
      isValid: true,
      message: 'Dosis dentro del rango terapéutico',
      severity: 'low'
    };
  }

  calculateDosePerKg(totalDose: number, weight: number): number {
    return Math.round((totalDose / weight) * 100) / 100;
  }

  calculateTotalDose(dosePerKg: number, weight: number): number {
    return Math.round(dosePerKg * weight * 100) / 100;
  }
}

export const calculationService = CalculationService.getInstance();