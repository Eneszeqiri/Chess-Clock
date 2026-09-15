import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';

import styles from './styles';
import UpperHalf from './UpperHalf';
import LowerHalf from './LowerHalf';
import CenterControls from './CenterControl';
import SettingsDialog from './SettingsDialog';

import { INITIAL_TIME, formatTime, timeFromMinutesSeconds } from './utils/time';
import useChessClock from './hooks/useChessClock';
import { handleUpperPress, handleLowerPress } from './handlers/useTurnHandler';

export default function App() {
  const [upperTime, setUpperTime] = useState(INITIAL_TIME);
  const [lowerTime, setLowerTime] = useState(INITIAL_TIME);
  const [active, setActive] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [upperMinutes, setUpperMinutes] = useState(5);
  const [upperSeconds, setUpperSeconds] = useState(0);
  const [lowerMinutes, setLowerMinutes] = useState(5);
  const [lowerSeconds, setLowerSeconds] = useState(0);
  const [upperIncrement, setUpperIncrement] = useState(0);
  const [lowerIncrement, setLowerIncrement] = useState(0);

  useChessClock(active, setUpperTime, setLowerTime);

  useEffect(() => {
    if (upperTime === 0 || lowerTime === 0) {
      setActive(null);
    }
  }, [upperTime, lowerTime]);
  

  function handleSetTimes(nextSettings) {
    const next = nextSettings || {
      upperMinutes,
      upperSeconds,
      lowerMinutes,
      lowerSeconds,
      upperIncrement,
      lowerIncrement,
    };
    setUpperMinutes(next.upperMinutes);
    setUpperSeconds(next.upperSeconds);
    setLowerMinutes(next.lowerMinutes);
    setLowerSeconds(next.lowerSeconds);
    setUpperIncrement(next.upperIncrement);
    setLowerIncrement(next.lowerIncrement);
    setUpperTime(timeFromMinutesSeconds(next.upperMinutes, next.upperSeconds));
    setLowerTime(timeFromMinutesSeconds(next.lowerMinutes, next.lowerSeconds));
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
          initialUpperMinutes={upperMinutes}
          initialUpperSeconds={upperSeconds}
          initialLowerMinutes={lowerMinutes}
          initialLowerSeconds={lowerSeconds}
          initialUpperIncrement={upperIncrement}
          initialLowerIncrement={lowerIncrement}
          onSet={handleSetTimes}
        />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}
