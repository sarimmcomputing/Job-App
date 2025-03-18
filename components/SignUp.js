// SignUp.js
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

const SignUp = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUpButton = () => {
    const isFullNameValid = fullName.length > 5;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;

    if (!isFullNameValid) {
      Toast.show({
        type: "error",
        text1: "Invalid Full Name",
        text2: "Full Name must be greater than 5 characters.",
      });
    } else if (!isEmailValid) {
      Toast.show({
        type: "error",
        text1: "Invalid Email",
        text2: "Please enter a valid email address.",
      });
    } else if (!isPasswordValid) {
      Toast.show({
        type: "error",
        text1: "Invalid Password",
        text2: "Password must be at least 8 characters long.",
      });
    } else {
      // For now, let's just display a success message, implement your signup logic here
      Toast.show({
        type: "success",
        text1: "User Created",
        text2: "Kindly sign in to proceed",
      });

      setFullName("");
      setEmail("");
      setPassword("");

      navigation.navigate("SignIn");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash-screen-icon.png")}
        style={styles.splashScreenIcon}
      />
      <Text style={styles.pageheading}>Signup</Text>

      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/username-icon.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/mail-icon.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/password-icon.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={passwordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={require("../assets/eye-open-icon.png")}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={handleSignUpButton}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text>Already have an account?</Text>
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
  pageheading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 2,
  },
  inputWrapper: {
    marginTop: 20,
    width: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#D9D9D9D1",
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
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  signUpButton: {
    backgroundColor: "#9E0885",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 16,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInContainer: {
    flexDirection: "row",
    marginTop: 40,
  },
  signInLink: {
    color: "#9E0885",
    marginLeft: 1,
    marginTop: -2,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SignUp;
