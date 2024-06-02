

import { WaterProvider } from './src/context/WaterContext';
import { Navigation } from './src/navigation/Navigation';
import { Router } from './src/routes/Router';
export default function App() {


  return (
    <WaterProvider>
      <Router />
    </WaterProvider>
  );
}
