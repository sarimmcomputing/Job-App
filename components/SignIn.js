// SignIn.js
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  // Clear inputs when the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      setEmail("");
      setPassword("");
    }, [])
  );

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = () => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;

    if (!isEmailValid) {
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
      Toast.show({
        type: "success",
        text1: "Sign In Successful",
        text2: "Welcome to Identity!",
      });

      navigation.navigate("JobListing");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash-screen-icon.png")}
        style={styles.splashScreenIcon}
      />

      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/username-icon.png")}
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
        style={styles.forgetPassword}
        onPress={handleForgetPassword}
      >
        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpLink}>Signup </Text>
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
  forgetPassword: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  forgetPasswordText: {
    color: "#9E0885",
    fontWeight: "600",
  },
  signInButton: {
    backgroundColor: "#9E0885",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 16,
  },
  signInButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 40,
  },
  signUpLink: {
    color: "#9E0885",
    marginLeft: 1,
    marginTop: -2,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SignIn;
