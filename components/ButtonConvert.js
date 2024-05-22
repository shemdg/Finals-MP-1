import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonConvert({ toggleUnit, unit }) {
  return (
    <TouchableOpacity style={styles.button} onPress={toggleUnit}>
      <Text style={styles.buttonText}>
        Convert to {unit === 'C' ? '°F' : '°C'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 25,
    width: 200
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center'
  },
});
