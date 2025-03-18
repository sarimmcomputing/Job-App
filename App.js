import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import SplashScreen from "./components/SplashScreen";
import AppNavigator from "./AppNavigator";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  const [loaded] = useFonts({
    Poppins: require("./assets/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    const initializeApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      if (loaded) {
        setAppReady(true);
      }
    };

    initializeApp();
  }, [loaded]);

  return (
    <View style={styles.container}>
      {isAppReady ? <AppNavigator /> : <SplashScreen />}
      <StatusBar style="auto" />
      <Toast position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
