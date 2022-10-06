import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SingleString from './src/SingleString';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SingleString />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152238',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
