// AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";
import OtpPage from "./components/OtpPage";
import ResetPassword from "./components/ResetPassword";
import JobListing from "./components/JobListing";
import JobDetails from "./components/JobDetails";
import JobPosting from "./components/JobPosting";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OtpPage" component={OtpPage} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="JobListing" component={JobListing} />
        <Stack.Screen name="JobDetails" component={JobDetails} />
        <Stack.Screen name="JobPosting" component={JobPosting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
