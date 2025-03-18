// ResetPassword.js
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

const ResetPassword = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    // Check if passwords meet the criteria
    const isPasswordValid = newPassword.length >= 8;
    const doPasswordsMatch = newPassword === confirmPassword;

    if (!isPasswordValid) {
      Toast.show({
        type: "error",
        text1: "Invalid Password",
        text2: "Password must be at least 8 characters long.",
      });
    } else if (!doPasswordsMatch) {
      Toast.show({
        type: "error",
        text1: "Password Mismatch",
        text2: "New password and confirm password do not match.",
      });
    } else {
      // Passwords are valid, proceed with save logic

      // Show success message
      Toast.show({
        type: "success",
        text1: "Password Saved",
        text2: "Your password has been successfully updated!",
      });

      // Navigate to the desired screen (e.g., SignIn)
      navigation.navigate("SignIn");

      // Clear the input fields
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash-screen-icon.png")}
        style={styles.splashScreenIcon}
      />
      <View style={styles.containerheading}>
        <Text style={styles.heading}>Reset Your Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/password-icon.png")}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/password-icon.png")}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
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
  splashScreenIcon: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginTop: -40,
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
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    backgroundColor: "#D9D9D9D1",
    width: 275,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#9E0885",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 6,
    marginTop: 30,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResetPassword;
