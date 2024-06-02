// screens/WaterCalculatorScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WaterCalculatorScreen = () => {
  const [weight, setWeight] = useState<string>('');
  const [waterIntake, setWaterIntake] = useState<number | null>(null);
  const [savedWeight, setSavedWeight] = useState<string | null>(null);

  useEffect(() => {
    // Carrega o peso salvo ao entrar na tela
    loadSavedWeight();
  }, []);

  const loadSavedWeight = async () => {
    try {
      const savedWeight = await AsyncStorage.getItem('weight');
      if (savedWeight !== null) {
        setSavedWeight(savedWeight);
      }
    } catch (error) {
      console.error('Erro ao carregar o peso salvo:', error);
    }
  };

  const saveWeight = async (value: string) => {
    try {
      await AsyncStorage.setItem('weight', value);
      setSavedWeight(value);
    } catch (error) {
      console.error('Erro ao salvar o peso:', error);
    }
  };

  const calculateWaterIntake = () => {
    let temperature = 0
    let intake = parseFloat(weight) * 35;
    // Adiciona 200 ml se a temperatura for superior a 30°C
    if (temperature && temperature > 30) {
      intake += 200;
    }
    setWaterIntake(intake);
    saveWeight(weight); // Salva o peso após o cálculo
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
      {savedWeight !== null && (
        <Text style={styles.savedWeight}>Peso salvo: {savedWeight} kg</Text>
      )}
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
  savedWeight: {
    marginTop: 10,
    color: 'gray',
  },
});

export default WaterCalculatorScreen;