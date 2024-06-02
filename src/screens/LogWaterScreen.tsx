import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { WaterContext } from '../context/WaterContext';
import { useNavigation } from '@react-navigation/native'; // Importando o hook useNavigation
import PieChart from 'react-native-pie-chart';
import Modal from 'react-native-modal';

const ExcessAlert = ({ excess }: { excess: number }) => {

  let textInfo = `${excess.toFixed(2)} L`;

  return (
    <View style={styles.excessAlertContainer}>
      <Text style={styles.excessAlertText}>
        Parabéns! Você consumiu {textInfo} de água a mais do que a meta.
      </Text>
    </View>
  );
};

const LogWaterScreen = () => {
  const { waterData, updateConsumed } = useContext(WaterContext);
  const [amount, setAmount] = useState<string>('');
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const navigation = useNavigation(); // Inicializando o hook useNavigation

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
              setModalVisible(false);
            },
          },
        ],
        { cancelable: false }
      );
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
  const consumed = waterData.consumed / 1000; // Convertendo ml para litros
  let remaining = (dailyIntake - waterData.consumed) / 1000; // Convertendo ml para litros

  // Se o valor consumido for maior que a meta, definimos o restante como 0
  if (remaining < 0) {
    remaining = 0;
  }

  const [excessAlertVisible, setExcessAlertVisible] = useState<boolean>(false);
  const [numExcess, setNumExcess] = useState<number>(0);

  function calculateExcess() {
    if (consumed > dailyIntake / 1000) {
      setExcessAlertVisible(true);
      setNumExcess(consumed - dailyIntake / 1000);
    } else {
      setExcessAlertVisible(false);
      setNumExcess(0);
    }
  }

  useEffect(()=> {
    // Calcula o excedente, se houver
    calculateExcess()
  },[, consumed])

  return (

    <View style={styles.container}>
      {excessAlertVisible && <ExcessAlert excess={numExcess} />}

      <Text style={styles.title}>Seu consumo de água hoje:</Text>
      
      <View style={styles.chartContainer}>
        <PieChart
          widthAndHeight={200}
          series={[consumed, remaining]}
          sliceColor={['#3498db', '#ecf0f1']}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#3498db' }]} />
            <Text>Consumido</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#ecf0f1' }]} />
            <Text>Restante</Text>
          </View>
        </View>
      </View>

      <Text style={styles.info}>Consumido hoje: {consumed.toFixed(2)} litros</Text>
      <Text style={styles.info}>Restante hoje: {remaining.toFixed(2)} litros</Text>

      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Registrar Consumo</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modalContent}>
          <Text style={styles.label}>Quantidade de água consumida (ml):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
          <Button title="Confirmar" onPress={handleLogWater} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: 'center',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
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
  excessAlertContainer: {
    backgroundColor: '#2ecc71',
    opacity: 0.8,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginBottom: 20,
  },
  excessAlertText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LogWaterScreen;
