import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TemperatureDisplay({ temperature, unit }) {
  const displayTemperature = temperature !== null ? temperature.toFixed(1) : '--';

  return (
    <View style={styles.display}>
      <Text style={styles.temperatureText}>
        {displayTemperature}°{unit}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    alignItems: 'center',
    marginVertical: 20,
  },
  temperatureText: {
    fontSize: 55,
    color: '#FFF',
    fontWeight: '650'
  },
});
