// screens/LogWaterScreen.tsx
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { WaterContext } from '../context/WaterContext';

const LogWaterScreen = () => {
  const { waterData, updateConsumed } = useContext(WaterContext);
  const [amount, setAmount] = useState<string>('');

  const handleLogWater = () => {
    const consumed = parseFloat(amount);
    if (!isNaN(consumed)) {
      Alert.alert(
        'Confirmação',
        `Você consumiu ${consumed} ml de água?`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: () => {
              updateConsumed(consumed);
              setAmount('');
            },
          },
        ],
        { cancelable: false }
      )
      setAmount('');
    }else{
      Alert.alert('Erro', 'Digite um valor válido', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel',
        },
      ])
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quantidade de água consumida (ml):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Registrar Consumo" onPress={handleLogWater} />
      <Text style={styles.info}>Diária recomendada: {waterData.dailyIntake} ml</Text>
      <Text style={styles.info}>Consumido hoje: {waterData.consumed} ml</Text>
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
  info: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default LogWaterScreen;
