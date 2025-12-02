export interface Precaution {
  id: string;
  medicationId?: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'general' | 'monitoring' | 'contraindications' | 'interactions' | 'administration';
  icon: string;
}

export interface SafetyAlert {
  id: string;
  message: string;
  severity: 'warning' | 'error' | 'info';
  timestamp: Date;
}