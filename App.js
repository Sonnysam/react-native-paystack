import { StyleSheet, Text, View } from 'react-native';
import logo from './components/Logo';
import Payment from './components/Payment';

export default function App() {
  return (
    <View style={styles.container}>
      <logo/>
      <Payment/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
