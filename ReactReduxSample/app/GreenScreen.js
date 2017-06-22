import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const GreenScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        This is Green Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B5E20',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color :'#FFFDE7',
    margin: 10,
  },
});

export default GreenScreen;
