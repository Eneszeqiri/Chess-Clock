import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from './styles';

export default function CenterControls({ onPause, onSettings, onReset }) {
  return (
    <View style={styles.centerButtonRow}>
      <View style={styles.iconWrapper}>
        <IconButton icon="pause" iconColor="#fff" size={30} onPress={onPause} />
      </View>
      <View style={styles.iconWrapper}>
        <IconButton icon="cog" iconColor="#fff" size={30} onPress={onSettings} />
      </View>
      <View style={styles.iconWrapper}>
        <IconButton icon="restore" iconColor="#fff" size={30} onPress={onReset} />
      </View>
    </View>
  );
}
