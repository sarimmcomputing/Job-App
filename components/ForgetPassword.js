// ForgetPassword.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  const VerifiOtp = () => {
    // Check if email is valid
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isEmailValid) {
      Toast.show({
        type: "error",
        text1: "Invalid Email",
        text2: "Please enter a valid email address.",
      });
      return; // Stop further execution
    }

    // Show toast message
    Toast.show({
      type: "info",
      text1: "Fill OTP",
      text2: "Kindly fill the OTP sent to your email address.",
    });

    // Proceed with OTP verification logic
    navigation.navigate("OtpPage");

    // Clear the input field
    setEmail("");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/forget-password-page.png")}
        style={styles.splashScreenIcon}
      />
      <View style={styles.containerheading}>
        <Text style={styles.heading}>Enter Email to recover your</Text>
        <Text style={styles.heading}>password</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/mail-icon.png")}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={VerifiOtp}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInLink}>SignIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashScreenIcon: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginTop: -30,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  containerheading: {
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#D9D9D9D1",
    width: "80%",
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  verifyButton: {
    backgroundColor: "#9E0885",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 16,
  },
  verifyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInContainer: {
    flexDirection: "row",
    marginTop: 40,
  },
  signInText: {
    marginRight: 1,
  },
  signInLink: {
    color: "#9E0885",
    marginLeft: 1,
    marginTop: -2,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ForgetPassword;
