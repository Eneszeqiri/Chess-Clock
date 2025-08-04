import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';

import styles from './styles';
import UpperHalf from './UpperHalf';
import LowerHalf from './LowerHalf';
import CenterControls from './CenterControl';
import SettingsDialog from './SettingsDialog';

import { INITIAL_TIME, formatTime, parseTimeString } from './utils/time';
import useChessClock from './hooks/useChessClock';
import { handleUpperPress, handleLowerPress } from './handlers/useTurnHandler';

export default function App() {
  const [upperTime, setUpperTime] = useState(INITIAL_TIME);
  const [lowerTime, setLowerTime] = useState(INITIAL_TIME);
  const [active, setActive] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [upperInput, setUpperInput] = useState('5:00:000');
  const [lowerInput, setLowerInput] = useState('5:00:000');
  const [upperIncrement, setUpperIncrement] = useState('0');
  const [lowerIncrement, setLowerIncrement] = useState('0');

  useChessClock(active, setUpperTime, setLowerTime);

  useEffect(() => {
    if (upperTime === 0 || lowerTime === 0) {
      setActive(null);
    }
  }, [upperTime, lowerTime]);
  

  function handleSetTimes() {
    setUpperTime(parseTimeString(upperInput));
    setLowerTime(parseTimeString(lowerInput));
    setModalVisible(false);
    setActive(null);
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <UpperHalf
          time={formatTime(upperTime)}
          onPress={() => handleUpperPress(active, upperTime, lowerTime, upperIncrement, setUpperTime, setActive)}
          active={active === 'upper'}
        />
        <LowerHalf
          time={formatTime(lowerTime)}
          onPress={() => handleLowerPress(active, upperTime, lowerTime, lowerIncrement, setLowerTime, setActive)}
          active={active === 'lower'}
        />
        <CenterControls
          onPause={() => setActive(null)}
          onSettings={() => setModalVisible(true)}
          onReset={handleSetTimes}
        />
        <SettingsDialog
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          upperInput={upperInput}
          setUpperInput={setUpperInput}
          lowerInput={lowerInput}
          setLowerInput={setLowerInput}
          upperIncrement={upperIncrement}
          setUpperIncrement={setUpperIncrement}
          lowerIncrement={lowerIncrement}
          setLowerIncrement={setLowerIncrement}
          onSet={handleSetTimes}
        />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}
