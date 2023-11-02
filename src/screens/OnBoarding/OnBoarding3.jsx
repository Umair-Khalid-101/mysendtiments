import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
// SVGS
import { OnBoarding3Svg } from "../../svgs";

// CONSTANTS
import { colors, font } from "../../constants";

export default function OnBoarding3() {
  const navigation = useNavigation();

  const navigateToNewScreen = () => {
    // Reset the entire navigation stack and navigate to NewScreen
    navigation.dispatch(
      CommonActions.reset({
        index: 0, // This represents the index of the screen to navigate to in the stack
        routes: [{ name: "SignUp" }], // New screen to navigate to
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <OnBoarding3Svg />
      <Text style={styles.title}>Celebrate Together</Text>
      <View style={styles.flex}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>
            Share and celebrate special moments with loved ones using web links
            and QR codes
          </Text>
        </View>
      </View>

      <View style={styles.flexRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("OnBoarding2")}
        >
          <Ionicons name="ios-chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={navigateToNewScreen}
        >
          <Text style={styles.nextButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: "20%",
    height: 50,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 30,
    gap: 20,
  },
  nextButton: {
    width: "60%",
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    color: colors.white,
  },
  subtitleContainer: {
    width: "85%",
  },
  subtitleText: {
    marginTop: "3%",
    textAlign: "center",
    fontSize: 16,
    fontFamily: font.medium,
    color: colors.gray,
    lineHeight: 20,
  },
  title: {
    fontFamily: font.bold,
    fontSize: 26,
    textAlign: "center",
    color: colors.black,
    marginTop: "15%",
  },
});
