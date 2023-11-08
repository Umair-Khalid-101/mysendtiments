import { StyleSheet, Text, View } from "react-native";
import React from "react";

// NAVIGATION
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

// SCREENS
import {
  OnBoarding,
  OnBoarding2,
  OnBoarding3,
  SignUp,
  SignIn,
  Registration,
  ForgotPassword,
  CreateNewPassword,
  NewPassword,
  PasswordSet,
  Home,
  SendTimentDetails,
  CreateSendTiment,
  EditSendTiment,
} from "../screens";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="OnBoarding2"
          component={OnBoarding2}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="OnBoarding3"
          component={OnBoarding3}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordSet"
          component={PasswordSet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendTimentDetails"
          component={SendTimentDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateSendTiment"
          component={CreateSendTiment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditSendTiment"
          component={EditSendTiment}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
