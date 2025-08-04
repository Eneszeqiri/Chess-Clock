import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function LowerHalf({ time, onPress, active }) {
  return (
    <TouchableOpacity
      style={[styles.half, styles.lowerHalf, active && { opacity: 1 }, !active && { opacity: 0.7 }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.lowerNumber}>{time}</Text>
    </TouchableOpacity>
  );
} 