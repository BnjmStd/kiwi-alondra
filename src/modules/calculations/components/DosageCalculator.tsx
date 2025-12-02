import { calculationService } from '@/calculations/services/calculationService';
import { CalculationInput, CalculationResult } from '@/calculations/types';
import { Medication } from '@/medications/types';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface DosageCalculatorProps {
  medication: Medication;
  onCalculationComplete: (result: CalculationResult) => void;
}

export const DosageCalculator: React.FC<DosageCalculatorProps> = ({
  medication,
  onCalculationComplete
}) => {
  const [patientWeight, setPatientWeight] = useState('');
  const [prescribedDose, setPrescribedDose] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    const weight = parseFloat(patientWeight);
    const dose = parseFloat(prescribedDose);

    if (!weight || weight <= 0) {
      Alert.alert('Error', 'Ingrese un peso válido');
      return;
    }

    if (!dose || dose <= 0) {
      Alert.alert('Error', 'Ingrese una dosis válida');
      return;
    }

    const input: CalculationInput = {
      medicationId: medication.id,
      patientWeight: weight,
      prescribedDose: dose,
      prescribedUnit: medication.unit
    };

    const calculationResult = calculationService.calculateInfusionRate(input, medication);
    setResult(calculationResult);
    onCalculationComplete(calculationResult);
  };

  const handleReset = () => {
    setPatientWeight('');
    setPrescribedDose('');
    setResult(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.medicationName}>{medication.name}</Text>
        <Text style={styles.medicationRange}>
          Rango: {medication.dosageRange.min} - {medication.dosageRange.max} {medication.dosageRange.unit}
        </Text>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Peso del Paciente (kg)</Text>
        <TextInput
          style={styles.input}
          value={patientWeight}
          onChangeText={setPatientWeight}
          placeholder="Ej: 70"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Dosis Prescrita ({medication.unit})</Text>
        <TextInput
          style={styles.input}
          value={prescribedDose}
          onChangeText={setPrescribedDose}
          placeholder={`Ej: ${medication.dosageRange.min}`}
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Text style={styles.buttonText}>Calcular Dosis</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Limpiar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {result && (
        <View style={styles.resultSection}>
          <Text style={styles.resultTitle}>Resultado del Cálculo</Text>
          
          <View style={[styles.resultCard, !result.isWithinRange && styles.warningCard]}>
            <Text style={styles.infusionRate}>
              Velocidad: {result.infusionRate} {result.infusionUnit}
            </Text>
            
            <Text style={styles.dilutionText}>
              {result.dilutionInstructions}
            </Text>
            
            {result.medicationAmount > 0 && (
              <Text style={styles.volumeInfo}>
                Volumen total: {result.totalVolume} mL
              </Text>
            )}
          </View>

          {result.warnings.length > 0 && (
            <View style={styles.warningsSection}>
              {result.warnings.map((warning, index) => (
                <Text key={index} style={styles.warningText}>
                  {warning}
                </Text>
              ))}
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9ff',
  },
  header: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  medicationName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 4,
  },
  medicationRange: {
    fontSize: 14,
    color: '#718096',
  },
  inputSection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#f7fafc',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  calculateButton: {
    flex: 2,
    backgroundColor: '#667eea',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  resetButtonText: {
    color: '#4a5568',
    fontSize: 16,
    fontWeight: '600',
  },
  resultSection: {
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 12,
  },
  resultCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#48bb78',
  },
  warningCard: {
    borderLeftColor: '#ed8936',
  },
  infusionRate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 8,
  },
  dilutionText: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 4,
  },
  volumeInfo: {
    fontSize: 14,
    color: '#718096',
  },
  warningsSection: {
    marginTop: 12,
    backgroundColor: '#fed7d7',
    borderRadius: 8,
    padding: 12,
  },
  warningText: {
    fontSize: 14,
    color: '#c53030',
    fontWeight: '500',
    marginBottom: 4,
  },
});