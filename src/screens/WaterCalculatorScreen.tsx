// screens/WaterCalculatorScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { WaterContext } from '../context/WaterContext';
import { useNavigation } from '@react-navigation/native';

const WaterCalculatorScreen = () => {
  const navigation = useNavigation();
  const { waterData, updateWaterData } = useContext(WaterContext);

  const [weight, setWeight] = useState<string>('');
  const [waterIntake, setWaterIntake] = useState<number | null>(null);
  const [savedWeight, setSavedWeight] = useState<string | null>(null);

  const calculateWaterIntake = () => {
    const intake = parseFloat(weight) * 35;
    setWaterIntake(intake);
    updateWaterData(weight, intake, waterData.consumed);
  };

  const handleNavigateToLog = () => {
    navigation.navigate('LogWater');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu peso (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <Button title="Calcular" onPress={calculateWaterIntake} />
      {waterIntake !== null && (
        <Text style={styles.result}>Você deve beber {waterIntake} ml de água por dia.</Text>
      )}
      <Button title="Ir para o Log de Água" onPress={handleNavigateToLog} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WaterCalculatorScreen;
