import { GENERAL_PRECAUTIONS, MEDICATION_SPECIFIC_PRECAUTIONS } from '@/precautions/data/precautions';
import { Precaution } from '@/precautions/types';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface PrecautionsViewProps {
  medicationId?: string;
  showGeneral?: boolean;
}

export const PrecautionsView: React.FC<PrecautionsViewProps> = ({
  medicationId,
  showGeneral = true
}) => {
  const getSeverityColor = (severity: Precaution['severity']) => {
    const colors = {
      low: '#68d391',
      medium: '#f6e05e',
      high: '#fc8181',
      critical: '#e53e3e'
    };
    return colors[severity];
  };

  const getSeverityLabel = (severity: Precaution['severity']) => {
    const labels = {
      low: 'BAJA',
      medium: 'MEDIA',
      high: 'ALTA',
      critical: 'CRÍTICA'
    };
    return labels[severity];
  };

  const renderPrecaution = (precaution: Precaution) => (
    <View 
      key={precaution.id} 
      style={[
        styles.precautionCard,
        { borderLeftColor: getSeverityColor(precaution.severity) }
      ]}
    >
      <View style={styles.precautionHeader}>
        <Text style={styles.precautionIcon}>{precaution.icon}</Text>
        <View style={styles.precautionTitle}>
          <Text style={styles.titleText}>{precaution.title}</Text>
          <View style={[
            styles.severityBadge,
            { backgroundColor: getSeverityColor(precaution.severity) }
          ]}>
            <Text style={styles.severityText}>
              {getSeverityLabel(precaution.severity)}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.precautionDescription}>
        {precaution.description}
      </Text>
    </View>
  );

  const medicationPrecautions = medicationId 
    ? MEDICATION_SPECIFIC_PRECAUTIONS[medicationId] || []
    : [];

  return (
    <ScrollView style={styles.container}>
      {medicationId && medicationPrecautions.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Precauciones Específicas</Text>
          {medicationPrecautions.map(renderPrecaution)}
        </View>
      )}

      {showGeneral && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Precauciones Generales</Text>
          {GENERAL_PRECAUTIONS.map(renderPrecaution)}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 16,
  },
  precautionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  precautionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  precautionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  precautionTitle: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 4,
  },
  severityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  severityText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  precautionDescription: {
    fontSize: 14,
    color: '#4a5568',
    lineHeight: 20,
  },
});