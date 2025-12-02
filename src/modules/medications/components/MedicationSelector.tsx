import { medicationService } from '@/medications/services/medicationService';
import { Medication } from '@/medications/types';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface MedicationSelectorProps {
  onMedicationSelect: (medication: Medication) => void;
}

export const MedicationSelector: React.FC<MedicationSelectorProps> = ({ 
  onMedicationSelect 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [medications, setMedications] = useState<Medication[]>(
    medicationService.getAllMedications()
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length === 0) {
      setMedications(medicationService.getAllMedications());
    } else {
      setMedications(medicationService.searchMedications(query));
    }
  };

  const getCategoryColor = (category: Medication['category']) => {
    const colors = {
      vasoactive: '#ffe6e6',
      sedation: '#e6f3ff',
      analgesia: '#ffd6e7',
      neuromuscular: '#f5f0ff',
      other: '#f0f0f0'
    };
    return colors[category] || colors.other;
  };

  const getCategoryIcon = (category: Medication['category']) => {
    const icons = {
      vasoactive: '💊',
      sedation: '😴',
      analgesia: '🩹',
      neuromuscular: '💪',
      other: '⚕️'
    };
    return icons[category] || icons.other;
  };

  const renderMedication = ({ item }: { item: Medication }) => (
    <TouchableOpacity
      style={[styles.medicationCard, { backgroundColor: item.color }]}
      onPress={() => onMedicationSelect(item)}
    >
      <View style={styles.medicationHeader}>
        <Text style={styles.medicationIcon}>
          {getCategoryIcon(item.category)}
        </Text>
        <Text style={styles.medicationName}>{item.name}</Text>
      </View>
      <Text style={styles.medicationInfo}>
        {item.dosageRange.min} - {item.dosageRange.max} {item.dosageRange.unit}
      </Text>
      <Text style={styles.medicationConcentration}>
        Concentración: {item.concentration} {item.concentrationUnit}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccionar Medicamento</Text>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar medicamento..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={renderMedication}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2d3748',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  medicationCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  medicationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  medicationIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3748',
  },
  medicationInfo: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 4,
  },
  medicationConcentration: {
    fontSize: 14,
    color: '#4a5568',
  },
});