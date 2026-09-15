import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Portal, Dialog, Button, Text } from 'react-native-paper';
import NumberSelect from './NumberSelect';

export default function SettingsDialog({
  visible,
  onDismiss,
  initialUpperMinutes,
  initialUpperSeconds,
  initialLowerMinutes,
  initialLowerSeconds,
  initialUpperIncrement,
  initialLowerIncrement,
  onSet,
}) {
  const [upperMinutes, setUpperMinutes] = useState(initialUpperMinutes);
  const [upperSeconds, setUpperSeconds] = useState(initialUpperSeconds);
  const [lowerMinutes, setLowerMinutes] = useState(initialLowerMinutes);
  const [lowerSeconds, setLowerSeconds] = useState(initialLowerSeconds);
  const [upperIncrement, setUpperIncrement] = useState(initialUpperIncrement);
  const [lowerIncrement, setLowerIncrement] = useState(initialLowerIncrement);

  useEffect(() => {
    if (!visible) return;
    setUpperMinutes(initialUpperMinutes);
    setUpperSeconds(initialUpperSeconds);
    setLowerMinutes(initialLowerMinutes);
    setLowerSeconds(initialLowerSeconds);
    setUpperIncrement(initialUpperIncrement);
    setLowerIncrement(initialLowerIncrement);
  }, [
    visible,
    initialUpperMinutes,
    initialUpperSeconds,
    initialLowerMinutes,
    initialLowerSeconds,
    initialUpperIncrement,
    initialLowerIncrement,
  ]);

  const upperInvalid = upperMinutes === 0 && upperSeconds === 0;
  const lowerInvalid = lowerMinutes === 0 && lowerSeconds === 0;

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Set Timers</Dialog.Title>
        <Dialog.Content>
          <Text variant="labelLarge">Upper</Text>
          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
            <NumberSelect
              label="Minutes"
              value={upperMinutes}
              onChange={setUpperMinutes}
              min={0}
              max={180}
              style={{ flex: 1 }}
            />
            <NumberSelect
              label="Seconds"
              value={upperSeconds}
              onChange={setUpperSeconds}
              min={0}
              max={59}
              style={{ flex: 1 }}
            />
            <NumberSelect
              label="Increment"
              value={upperIncrement}
              onChange={setUpperIncrement}
              min={0}
              max={60}
              padTo={1}
              style={{ flex: 1 }}
            />
          </View>

          <Text variant="labelLarge">Lower</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <NumberSelect
              label="Minutes"
              value={lowerMinutes}
              onChange={setLowerMinutes}
              min={0}
              max={180}
              style={{ flex: 1 }}
            />
            <NumberSelect
              label="Seconds"
              value={lowerSeconds}
              onChange={setLowerSeconds}
              min={0}
              max={59}
              style={{ flex: 1 }}
            />
            <NumberSelect
              label="Increment"
              value={lowerIncrement}
              onChange={setLowerIncrement}
              min={0}
              max={60}
              padTo={1}
              style={{ flex: 1 }}
            />
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Cancel</Button>
          <Button
            onPress={() => onSet({
              upperMinutes,
              upperSeconds,
              lowerMinutes,
              lowerSeconds,
              upperIncrement,
              lowerIncrement,
            })}
            disabled={upperInvalid || lowerInvalid}
          >
            Set
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
