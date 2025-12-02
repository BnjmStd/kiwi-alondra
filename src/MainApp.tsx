import { DosageCalculator } from '@/calculations/components/DosageCalculator';
import { CalculationResult } from '@/calculations/types';
import { MedicationSelector } from '@/medications/components/MedicationSelector';
import { Medication } from '@/medications/types';
import { PrecautionsView } from '@/precautions/components/PrecautionsView';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

type Screen = 'selection' | 'calculation' | 'precautions';

export default function MainApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('selection');
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);

  const handleMedicationSelect = (medication: Medication) => {
    setSelectedMedication(medication);
    setCurrentScreen('calculation');
  };

  const handleCalculationComplete = (result: CalculationResult) => {
    setCalculationResult(result);
    setCurrentScreen('precautions');
  };

  const handleReset = () => {
    setSelectedMedication(null);
    setCalculationResult(null);
    setCurrentScreen('selection');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'selection':
        return <MedicationSelector onMedicationSelect={handleMedicationSelect} />;
      
      case 'calculation':
        return selectedMedication ? (
          <DosageCalculator
            medication={selectedMedication}
            onCalculationComplete={handleCalculationComplete}
          />
        ) : null;
      
      case 'precautions':
        return (
          <PrecautionsView
            medicationId={selectedMedication?.id}
            showGeneral={true}
          />
        );
      
      default:
        return <MedicationSelector onMedicationSelect={handleMedicationSelect} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
});