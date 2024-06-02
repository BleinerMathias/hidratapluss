import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { WaterContext } from '../context/WaterContext';
import PieChart from 'react-native-pie-chart';

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
      );
      setAmount('');
    } else {
      Alert.alert('Erro', 'Digite um valor válido', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel',
        },
      ]);
    }
  };

  const dailyIntake = waterData.dailyIntake;
  const consumed = waterData.consumed;
  const remaining = dailyIntake - consumed > 0 ? dailyIntake - consumed : 0;

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
      <Text style={styles.info}>Diária recomendada: {dailyIntake} ml</Text>
      <Text style={styles.info}>Consumido hoje: {consumed} ml</Text>
      
      <PieChart
        widthAndHeight={200}
        series={[consumed, remaining]}
        sliceColor={['#3498db', '#ecf0f1']}
        coverRadius={0.45}
        coverFill={'#FFF'}
      />
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
