import { CRITICAL_CARE_MEDICATIONS } from '@/medications/data/medications';
import { Medication } from '@/medications/types';

class MedicationService {
  private static instance: MedicationService;
  
  private constructor() {}

  static getInstance(): MedicationService {
    if (!MedicationService.instance) {
      MedicationService.instance = new MedicationService();
    }
    return MedicationService.instance;
  }

  getAllMedications(): Medication[] {
    return CRITICAL_CARE_MEDICATIONS;
  }

  getMedicationById(id: string): Medication | undefined {
    return CRITICAL_CARE_MEDICATIONS.find(med => med.id === id);
  }

  getMedicationsByCategory(category: Medication['category']): Medication[] {
    return CRITICAL_CARE_MEDICATIONS.filter(med => med.category === category);
  }

  searchMedications(query: string): Medication[] {
    const lowercaseQuery = query.toLowerCase();
    return CRITICAL_CARE_MEDICATIONS.filter(med => 
      med.name.toLowerCase().includes(lowercaseQuery)
    );
  }
}

export const medicationService = MedicationService.getInstance();