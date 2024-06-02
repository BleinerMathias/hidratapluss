// context/WaterContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type WaterData = {
  weight: string | null;
  dailyIntake: number;
  consumed: number;
};

type WaterContextType = {
  waterData: WaterData;
  updateWaterData: (weight: string, dailyIntake: number, consumed: number) => void;
  updateConsumed: (consumed: number) => void;
};

export const WaterContext = createContext<WaterContextType>({
  waterData: { weight: null, dailyIntake: 0, consumed: 0 },
  updateWaterData: (weight: string, dailyIntake: number, consumed: number) => {},
  updateConsumed: (consumed: number) => {},
});

export const WaterProvider: React.FC = ({ children }) => {
  const [waterData, setWaterData] = useState<WaterData>({ weight: null, dailyIntake: 0, consumed: 0 });

  useEffect(() => {
    loadWaterData();
  }, []);

  const loadWaterData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('waterData');
      if (jsonValue !== null) {
        const data = JSON.parse(jsonValue);
        setWaterData(data);
      }
    } catch (error) {
      console.error('Error loading water data:', error);
    }
  };

  const updateWaterData = async (weight: string, dailyIntake: number, consumed: number) => {
    try {
      const newData: WaterData = { weight, dailyIntake, consumed };
      setWaterData(newData);
      const jsonValue = JSON.stringify(newData);
      await AsyncStorage.setItem('waterData', jsonValue);
    } catch (error) {
      console.error('Error saving water data:', error);
    }
  };

  const updateConsumed = async (consumed: number) => {
    try {
      const newConsumed = waterData.consumed + consumed;
      const newData: WaterData = {...waterData, consumed: newConsumed };
      setWaterData(newData);
      const jsonValue = JSON.stringify(newData);
      await AsyncStorage.setItem('waterData', jsonValue);
    } catch (error) {
      console.error('Error saving water data:', error);
    }
  };

  return (
    <WaterContext.Provider value={{ waterData, updateWaterData, updateConsumed }}>
      {children}
    </WaterContext.Provider>
  );
};
