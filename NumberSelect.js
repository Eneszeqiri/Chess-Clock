import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

export default function NumberSelect({ label, value, onChange, min, max, padTo = 2, style }) {
  const [open, setOpen] = useState(false);
  const options = [];
  for (let i = min; i <= max; i += 1) {
    options.push(i);
  }

  return (
    <View style={[{ minWidth: 0 }, style]}>
      <Text variant="labelSmall" style={{ marginBottom: 4 }}>{label}</Text>
      <Button
        mode="outlined"
        icon="chevron-down"
        contentStyle={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}
        onPress={() => setOpen(true)}
      >
        {String(value).padStart(padTo, '0')}
      </Button>
      <Portal>
        <Dialog visible={open} onDismiss={() => setOpen(false)} style={{ zIndex: 2000 }}>
          <Dialog.Title>{label}</Dialog.Title>
          <Dialog.ScrollArea style={{ maxHeight: 320, paddingHorizontal: 0 }}>
            <ScrollView>
              {options.map((option) => (
                <Button
                  key={option}
                  mode={option === value ? 'contained' : 'text'}
                  onPress={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                >
                  {String(option).padStart(padTo, '0')}
                </Button>
              ))}
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={() => setOpen(false)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
