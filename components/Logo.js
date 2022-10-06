import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/pay.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginHorizontal: 15,
    marginTop: 10,
  },
  image: {
    height: "100%",
    width: 450,
  },
});