import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
// CONSTANTS
import { font, colors } from "../../constants";

// SVGS
import { OnBoardingSvg } from "../../svgs";

export default function OnBoarding() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <OnBoardingSvg />
      <View style={styles.text}>
        <Text style={styles.title}>Capture the Moment</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.subtitle}>
          Snap and customize your gift with ease using web links and QR codes
        </Text>
      </View>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("SignUp")}
        >
          <Text style={styles.ButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  ButtonText: {
    color: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  subtitle: {
    fontFamily: font.medium,
    fontSize: 16,
    marginHorizontal: "10%",
    marginVertical: "2%",
    textAlign: "center",
    color: colors.gray,
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontFamily: font.bold,
    fontSize: 26,
    color: colors.black,
  },
});
