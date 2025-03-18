import React from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="purple" style={styles.loader} />

      <Image
        source={require("../assets/splash-screen-icon.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    position: "absolute",
    top: "40%",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default SplashScreen;
