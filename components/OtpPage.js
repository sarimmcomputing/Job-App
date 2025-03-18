// OtpPage.js
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const OtpPage = () => {
  const otpInputs = useRef([]);
  const navigation = useNavigation();
  const [otp, setOtp] = useState("");

  const handleChangeText = (text, index) => {
    if (text === "") {
      if (index > 0 && otpInputs.current[index - 1]) {
        otpInputs.current[index - 1].focus();
      }
    } else if (index < otpInputs.current.length - 1 && text !== "") {
      if (otpInputs.current[index + 1]) {
        otpInputs.current[index + 1].focus();
      }
    }

    const updatedOtp = otp.slice(0, index) + text + otp.slice(index + 1);
    setOtp(updatedOtp);
  };

  const handleVerify = () => {
    if (otp.length !== 6) {
      Toast.show({
        type: "error",
        text1: "Invalid OTP",
        text2: "Please enter a valid 6-digit OTP.",
      });
      return;
    }

    Toast.show({
      type: "success",
      text1: "OTP Validated",
      text2: "Reset Password !",
    });

    navigation.navigate("ResetPassword");

    setOtp("");
  };

  return (
    <View style={styles.container} onPress={Keyboard.dismiss}>
      <Image
        source={require("../assets/splash-screen-icon.png")}
        style={styles.splashScreenIcon}
      />
      <View style={styles.containerheading}>
        <Text style={styles.heading}>Enter Your Code</Text>
      </View>

      <View style={styles.otpContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            placeholder="0"
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleChangeText(text, index)}
            ref={(input) => {
              otpInputs.current[index] = input;
            }}
          />
        ))}
      </View>
      <Text style={styles.subHeading}>Have you received the code?</Text>

      <TouchableOpacity style={styles.resendCode}>
        <Text style={styles.resendCodeText}>Resend Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
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
  subHeading: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginVertical: 2,
  },
  containerheading: {
    marginVertical: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
    width: 275,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#D9D9D9D1",
  },
  resendCode: {
    marginTop: 5,
  },
  resendCodeText: {
    color: "#3254F4",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  verifyButton: {
    backgroundColor: "#9E0885",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 6,
    marginTop: 30,
  },
  verifyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OtpPage;
