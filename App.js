import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonConvert from './components/ButtonConvert';
import InputTemperature from './components/InputTemperature';
import TemperatureDisplay from './components/TemperatureDisplay';
import { UNITS, getOppositUnit, convertTemperatureTo } from './services/tempService';

const getTemperatureDescription = (temperature, unit) => {
  let tempInCelsius = temperature;
  if (unit === UNITS.faranheit) {
    tempInCelsius = convertTemperatureTo(UNITS.celcius, temperature);
  }

  if (tempInCelsius < 15) {
    return { description: 'Cold', color: '#00BFFF' }; // brrr malamig
  } else if (tempInCelsius < 30) {
    return { description: 'Warm', color: '#FFD700' }; // tosak lang
  } else {
    return { description: 'Hot', color: '#FF4500' }; // sobrang init na kailangan ko ng ice
  }
};

export default function App() {
  const [temperature, setTemperature] = useState(0);
  const [unit, setUnit] = useState(UNITS.celcius);

  const convertedTemperature = convertTemperatureTo(unit, temperature);

  const toggleUnit = () => {
    setUnit(getOppositUnit(unit));
  };

  const { color } = getTemperatureDescription(convertedTemperature, unit);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <TemperatureDisplay temperature={convertedTemperature} unit={unit} />
      <InputTemperature setTemperature={setTemperature} unit={unit} />
      <ButtonConvert toggleUnit={toggleUnit} unit={unit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
