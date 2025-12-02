# Estructura Modular de la Aplicación DosisSegura

## 📁 Estructura de Carpetas

```
src/
├── modules/                 # Módulos de la aplicación
│   ├── auth/               # Autenticación y usuarios
│   │   ├── components/     # LoginForm
│   │   ├── services/       # authService
│   │   └── types/          # User, AuthState, LoginCredentials
│   ├── medications/        # Gestión de medicamentos
│   │   ├── components/     # MedicationSelector
│   │   ├── services/       # medicationService
│   │   ├── types/          # Medication, MedicationSelection
│   │   └── data/           # CRITICAL_CARE_MEDICATIONS
│   ├── calculations/       # Cálculos de dosis
│   │   ├── components/     # DosageCalculator
│   │   ├── services/       # calculationService
│   │   └── types/          # CalculationInput, CalculationResult
│   └── precautions/        # Precauciones y alertas
│       ├── components/     # PrecautionsView
│       ├── data/           # GENERAL_PRECAUTIONS, MEDICATION_SPECIFIC_PRECAUTIONS
│       └── types/          # Precaution, SafetyAlert
└── shared/                 # Código compartido
    ├── constants/          # theme, app config
    ├── types/              # AppTheme
    ├── utils/              # calculations, validation helpers
    ├── hooks/              # useAsync
    └── services/           # servicios globales
```

## 🔧 Configuración

- **TypeScript**: Configurado con path mapping para imports limpios
- **Arquitectura Modular**: Cada módulo tiene su propia estructura independiente
- **Servicios Singleton**: Para gestión de estado y lógica de negocio
- **Tipos TypeScript**: Completamente tipado para mayor seguridad

## 🚀 Próximos Pasos

1. Integrar con las pantallas de navegación existentes
2. Agregar tests unitarios por módulo
3. Implementar persistencia de datos local
4. Agregar más medicamentos y precauciones
5. Implementar sistema de alertas en tiempo real

## 📱 Módulos Implementados

### Auth
- LoginForm: Componente de autenticación
- authService: Gestión de sesiones y usuarios

### Medications
- MedicationSelector: Selección visual de medicamentos
- Base de datos de medicamentos críticos (Fentanilo, Noradrenalina, etc.)

### Calculations
- DosageCalculator: Cálculo de dosis e infusión
- Validaciones de rangos terapéuticos
- Generación de advertencias automáticas

### Precautions
- PrecautionsView: Visualización de precauciones
- Precauciones específicas por medicamento
- Precauciones generales de seguridad