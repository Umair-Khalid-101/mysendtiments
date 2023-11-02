import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// SVGS
import { OnBoarding2Svg } from "../../svgs";

// CONSTANTS
import { colors, font } from "../../constants";

export default function OnBoarding2() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <OnBoarding2Svg />
      <Text style={styles.title}>Share Your Joy</Text>
      <View style={styles.flex}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>
            Enhance your gift exchanges with QR codes that bring smiles and
            celebrations
          </Text>
        </View>
      </View>

      <View style={styles.flexRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("OnBoarding")}
        >
          <Ionicons name="ios-chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("OnBoarding3")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
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
    width: "80%",
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
