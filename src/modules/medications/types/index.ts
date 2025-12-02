export interface Medication {
  id: string;
  name: string;
  category: 'vasoactive' | 'sedation' | 'analgesia' | 'neuromuscular' | 'other';
  unit: string;
  concentration: number;
  concentrationUnit: string;
  dosageRange: {
    min: number;
    max: number;
    unit: string;
  };
  dilution?: {
    medication: number;
    diluent: number;
    units: string;
  };
  color: string;
}

export interface MedicationSelection {
  medication: Medication;
  patientWeight: number;
  prescribedDose: number;
  prescribedUnit: string;
}