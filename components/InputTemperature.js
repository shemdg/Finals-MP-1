import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function InputTemperature({ setTemperature, unit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (text) => {
    setInputValue(text);
    setTemperature(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChange}
        keyboardType="numeric"
        placeholder={`Enter Temperature`}
      />
      <Text style={styles.unitIndicator}>
        {unit === 'C' ? '°F' : '°C'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 275,
    height: 45,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  unitIndicator: {
    marginLeft: 10,
    fontSize: 20,
    color: '#000',
  },
});
