import { PrecautionsView } from '@/precautions/components/PrecautionsView';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PrecautionsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>⚕️ Precauciones Generales</Text>
        <Text style={styles.subtitle}>Seguridad en Medicamentos Críticos</Text>
      </View>
      <PrecautionsView showGeneral={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  header: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3748',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    marginTop: 4,
  },
});
