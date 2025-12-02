import { Medication } from '@/medications/types';

export const CRITICAL_CARE_MEDICATIONS: Medication[] = [
  {
    id: 'fentanilo',
    name: 'Fentanilo',
    category: 'analgesia',
    unit: 'mcg/kg/min',
    concentration: 50,
    concentrationUnit: 'mcg/mL',
    dosageRange: {
      min: 0.5,
      max: 20,
      unit: 'mcg/kg/min'
    },
    dilution: {
      medication: 1,
      diluent: 49,
      units: 'mL de SSN 0.9%'
    },
    color: '#ffd6e7'
  },
  {
    id: 'midazolam',
    name: 'Midazolam',
    category: 'sedation',
    unit: 'mcg/kg/min',
    concentration: 1000,
    concentrationUnit: 'mcg/mL',
    dosageRange: {
      min: 10,
      max: 200,
      unit: 'mcg/kg/min'
    },
    dilution: {
      medication: 5,
      diluent: 45,
      units: 'mL de SSN 0.9%'
    },
    color: '#e6f3ff'
  },
  {
    id: 'noradrenalina',
    name: 'Noradrenalina',
    category: 'vasoactive',
    unit: 'mcg/kg/min',
    concentration: 16,
    concentrationUnit: 'mcg/mL',
    dosageRange: {
      min: 0.05,
      max: 2,
      unit: 'mcg/kg/min'
    },
    dilution: {
      medication: 4,
      diluent: 46,
      units: 'mL de DW5%'
    },
    color: '#ffe6e6'
  },
  {
    id: 'dopamina',
    name: 'Dopamina',
    category: 'vasoactive',
    unit: 'mcg/kg/min',
    concentration: 1600,
    concentrationUnit: 'mcg/mL',
    dosageRange: {
      min: 2,
      max: 20,
      unit: 'mcg/kg/min'
    },
    dilution: {
      medication: 10,
      diluent: 40,
      units: 'mL de DW5%'
    },
    color: '#fff0e6'
  },
  {
    id: 'propofol',
    name: 'Propofol',
    category: 'sedation',
    unit: 'mcg/kg/min',
    concentration: 10000,
    concentrationUnit: 'mcg/mL',
    dosageRange: {
      min: 10,
      max: 200,
      unit: 'mcg/kg/min'
    },
    color: '#f0fff0'
  },
  {
    id: 'rocuronio',
    name: 'Rocuronio',
    category: 'neuromuscular',
    unit: 'mcg/kg/min',
    concentration: 10000,
    concentrationUnit: 'mcg/mL',
    dosageRange: {
      min: 5,
      max: 15,
      unit: 'mcg/kg/min'
    },
    dilution: {
      medication: 5,
      diluent: 45,
      units: 'mL de SSN 0.9%'
    },
    color: '#f5f0ff'
  }
];