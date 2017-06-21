import React from 'react';
import { Text } from 'react-native';
export const TabIcon = ({selected, title}) => {
  return (
    <Text style={{ color : selected ? 'red' : 'black'}}>{title}</Text>
  );
}
