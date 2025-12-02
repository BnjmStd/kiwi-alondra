import { Precaution } from '@/precautions/types';

export const GENERAL_PRECAUTIONS: Precaution[] = [
  {
    id: 'general-1',
    title: 'Verificación de Identidad',
    description: 'Siempre verificar la identidad del paciente antes de administrar medicamentos usando al menos dos identificadores.',
    severity: 'critical',
    category: 'general',
    icon: '🆔'
  },
  {
    id: 'general-2',
    title: 'Cálculos Dobles',
    description: 'Todos los cálculos de dosis deben ser verificados por un segundo profesional de enfermería.',
    severity: 'critical',
    category: 'general',
    icon: '🔢'
  },
  {
    id: 'general-3',
    title: 'Compatibilidad de Vías',
    description: 'Verificar compatibilidad entre medicamentos cuando se administran por la misma vía.',
    severity: 'high',
    category: 'administration',
    icon: '💉'
  },
  {
    id: 'general-4',
    title: 'Monitoreo Continuo',
    description: 'Los pacientes con medicamentos vasoactivos requieren monitoreo continuo de signos vitales.',
    severity: 'critical',
    category: 'monitoring',
    icon: '📊'
  }
];

export const MEDICATION_SPECIFIC_PRECAUTIONS: Record<string, Precaution[]> = {
  fentanilo: [
    {
      id: 'fent-1',
      medicationId: 'fentanilo',
      title: 'Depresión Respiratoria',
      description: 'Monitor respiratorio continuo. Tener naloxona disponible. Dosis > 10 mcg/kg/min aumenta riesgo.',
      severity: 'critical',
      category: 'monitoring',
      icon: '🫁'
    },
    {
      id: 'fent-2',
      medicationId: 'fentanilo',
      title: 'Tolerancia Rápida',
      description: 'Puede desarrollar tolerancia en 24-48 horas. Evaluar necesidad de rotación de opioides.',
      severity: 'medium',
      category: 'monitoring',
      icon: '⏱️'
    },
    {
      id: 'fent-3',
      medicationId: 'fentanilo',
      title: 'Rigidez Torácica',
      description: 'Administración rápida puede causar rigidez torácica y dificultar ventilación.',
      severity: 'high',
      category: 'administration',
      icon: '⚠️'
    }
  ],
  noradrenalina: [
    {
      id: 'nora-1',
      medicationId: 'noradrenalina',
      title: 'Vía Central Obligatoria',
      description: 'NUNCA administrar por vía periférica. Usar exclusivamente vía central para evitar necrosis.',
      severity: 'critical',
      category: 'administration',
      icon: '🚫'
    },
    {
      id: 'nora-2',
      medicationId: 'noradrenalina',
      title: 'Monitoreo de Perfusión',
      description: 'Vigilar extremidades cada 30 minutos. Evaluar llenado capilar, temperatura, color.',
      severity: 'critical',
      category: 'monitoring',
      icon: '👀'
    },
    {
      id: 'nora-3',
      medicationId: 'noradrenalina',
      title: 'Extravasación',
      description: 'Si hay extravasación, infiltrar phentolamine 5-10 mg en 10-15 mL SSN inmediatamente.',
      severity: 'critical',
      category: 'administration',
      icon: '🚨'
    }
  ],
  midazolam: [
    {
      id: 'mida-1',
      medicationId: 'midazolam',
      title: 'Depresión Respiratoria',
      description: 'Monitor continuo respiratorio. Tener flumazenil disponible como antídoto.',
      severity: 'critical',
      category: 'monitoring',
      icon: '🫁'
    },
    {
      id: 'mida-2',
      medicationId: 'midazolam',
      title: 'Síndrome de Abstinencia',
      description: 'Descontinuación abrupta puede causar convulsiones. Siempre reducir gradualmente.',
      severity: 'high',
      category: 'administration',
      icon: '⚠️'
    }
  ],
  propofol: [
    {
      id: 'prop-1',
      medicationId: 'propofol',
      title: 'Síndrome de Propofol',
      description: 'Vigilar acidosis metabólica, rabdomiólisis, falla cardiaca. Especialmente en dosis >5mg/kg/h >48h.',
      severity: 'critical',
      category: 'monitoring',
      icon: '💔'
    },
    {
      id: 'prop-2',
      medicationId: 'propofol',
      title: 'Crecimiento Microbiano',
      description: 'Desechar cada 12 horas. No usar si hay sedimento o separación de fases.',
      severity: 'high',
      category: 'administration',
      icon: '🦠'
    }
  ]
};