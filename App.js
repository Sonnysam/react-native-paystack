import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';
import Payment from './components/Payment';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
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
