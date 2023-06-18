import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#50E3C2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const Button = memo<ButtonProps>(({ title, onPress }) => {
  const { button, buttonText } = styles;

  return (
    <TouchableOpacity style={button} onPress={onPress}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});

export { Button };
