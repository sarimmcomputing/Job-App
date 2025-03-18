// LandingPage.js
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgandtextcontainer}>
        <Image
          source={require("../assets/Landing-image.png")}
          style={styles.image}
        />
        <View style={styles.mainTextContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Let’s Find</Text>
            <Text style={styles.text}>Your Job</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subtext}>Search And Find </Text>
            <Text style={styles.subtext}>Your Job Easily And Quickly</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgandtextcontainer: {
    marginTop: 30,
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: "contain",
  },
  mainTextContainer: {
    width: 320,
  },
  textContainer: {
    alignItems: "flex-start",
    marginVertical: 10,
  },
  text: {
    fontSize: 26,
    fontWeight: "900",
  },
  subtext: {
    fontSize: 16,
    fontWeight: "500",
    color: "#9E0885",
  },
  button: {
    backgroundColor: "#9E0885",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 16,
    position: "absolute",
    bottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LandingPage;
