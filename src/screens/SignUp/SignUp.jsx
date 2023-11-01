import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TurboModuleRegistry,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// SVGS
import { SignUpSvg, GiftSvg } from "../../svgs";

// CONSTANTS
import { colors, font } from "../../constants";

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpSvg />
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <GiftSvg />
          <Text style={styles.title}>MySendTiments</Text>
          <Text style={styles.trademark}>TM</Text>
        </View>
      </View>
      <View style={styles.subtitleContainer}>
        <View style={styles.subtitleRow}>
          <Text style={styles.subtitle}>
            Where Personalized Gifting Meets Digital Magic!
          </Text>
        </View>
      </View>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.ButtonText}>Continue as a Guest</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SignInButtonContainer}>
        <TouchableOpacity style={styles.SignInButton}>
          <Text style={styles.SignInButtonText}>Sign In to your Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.LineContainer}>
        <View style={styles.LeftLine}></View>
        <Text style={styles.LineText}>Or</Text>
        <View style={styles.RightLine}></View>
      </View>

      <View style={styles.RegistrationButtonContainer}>
        <TouchableOpacity style={styles.RegistrationButton}>
          <Text style={styles.RegistrationButtonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.TermsContainer}>
        <View style={styles.TermsTextContainer}>
          <Text style={styles.TermsText}>
            By continuing to use MySendTiments, you agree with
          </Text>
          <View style={styles.PressableTextContainer}>
            <Text style={styles.TermsText}>the MySendTiments</Text>
            <TouchableOpacity>
              <Text style={styles.PressableText}>Terms</Text>
            </TouchableOpacity>
            <Text style={styles.TermsText}>and</Text>
            <TouchableOpacity>
              <Text style={styles.PressableText}>Privacy Note</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    marginTop: "10%",
  },
  ButtonText: {
    color: colors.white,
  },
  LineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    gap: 10,
  },
  LineText: {
    color: colors.lightgray,
  },
  LeftLine: {
    height: 1,
    width: "35%",
    backgroundColor: colors.line,
  },
  PressableTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  PressableText: {
    fontSize: 12,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  RightLine: {
    height: 1,
    width: "35%",
    backgroundColor: colors.line,
  },
  RegistrationButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
    borderColor: colors.lightgray,
    borderWidth: 1,
  },
  RegistrationButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  RegistrationButtonText: {
    color: colors.black,
    fontFamily: font.medium,
    fontSize: 15,
  },
  SignInButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
    borderColor: colors.blue,
    borderWidth: 1,
  },
  SignInButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  SignInButtonText: {
    color: colors.blue,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: colors.black,
  },
  subtitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  subtitleRow: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  title: {
    fontFamily: font.bold,
    fontSize: 24,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  titleRow: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  trademark: {
    fontFamily: font.bold,
    fontSize: 10,
    marginBottom: "3%",
  },
  TermsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 30,
  },
  TermsTextContainer: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TermsText: {
    fontSize: 12,
    color: colors.gray,
  },
});
