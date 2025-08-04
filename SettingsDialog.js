import React from 'react';
import { Portal, Dialog, Button, TextInput, Text } from 'react-native-paper';

export default function SettingsDialog({
  visible,
  onDismiss,
  upperInput,
  setUpperInput,
  lowerInput,
  setLowerInput,
  upperIncrement,
  setUpperIncrement,
  lowerIncrement,
  setLowerIncrement,
  onSet
}) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Set Timers</Dialog.Title>
        <Dialog.Content>
          <Text variant="labelLarge" style={{ marginTop: 10 }}>Upper</Text>
          <TextInput
            label="MM:SS:MS"
            value={upperInput}
            onChangeText={setUpperInput}
            keyboardType="numeric"
            maxLength={9}
            style={{ marginBottom: 10 }}
          />

          <Text variant="labelLarge">Lower</Text>
          <TextInput
            label="MM:SS:MS"
            value={lowerInput}
            onChangeText={setLowerInput}
            keyboardType="numeric"
            maxLength={9}
            style={{ marginBottom: 10 }}
          />

          <Text variant="labelLarge">Upper Increment (s)</Text>
          <TextInput
            value={upperIncrement}
            onChangeText={text => setUpperIncrement(text.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            maxLength={4}
            style={{ marginBottom: 10 }}
          />

          <Text variant="labelLarge">Lower Increment (s)</Text>
          <TextInput
            value={lowerIncrement}
            onChangeText={text => setLowerIncrement(text.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            maxLength={4}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onSet}>Set</Button>
          <Button onPress={onDismiss}>Cancel</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
