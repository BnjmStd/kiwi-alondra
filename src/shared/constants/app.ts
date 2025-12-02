export const APP_CONFIG = {
  name: 'DosisSegura',
  version: '1.0.0',
  description: 'Sistema de Cálculo de Dosis para Unidades Críticas',
};

export const DOSAGE_UNITS = {
  WEIGHT: 'kg',
  VOLUME: 'mL',
  TIME: 'h',
  RATE: 'mL/h',
  CONCENTRATION: 'mcg/mL',
  DOSE: 'mcg/kg/min',
} as const;

export const MEDICATION_CATEGORIES = {
  VASOACTIVE: 'vasoactive',
  SEDATION: 'sedation', 
  ANALGESIA: 'analgesia',
  NEUROMUSCULAR: 'neuromuscular',
  OTHER: 'other',
} as const;