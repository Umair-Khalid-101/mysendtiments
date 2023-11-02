import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// CONSTANTS
import { colors, font } from "../../constants";

export default function ForgotPassword() {
  const navigation = useNavigation();

  const forgotPasswordValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(forgotPasswordValidationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    navigation.navigate("CreateNewPassword");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Ionicons name="ios-chevron-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Forgot Password</Text>
          </View>

          <Text style={styles.titleText}>
            Please enter your email to reset your password
          </Text>

          <View style={styles.flexRow}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => onChange(value.trim())}
                  value={value}
                  placeholder="Email Address*"
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.errors}>{errors.email.message}</Text>
            )}
          </View>

          {Object.keys(errors).length > 0 ? (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButtonDisabled}
                disabled={true}
              >
                <Text style={styles.SignInButtonTextDisabled}>
                  Reset Password
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButton}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.SignInButtonText}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.FlexContainer}>
            <Text style={styles.Account}>Remember Password?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.Guest}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Account: {
    fontFamily: font.medium,
  },
  back: {
    flex: 0.4,
    marginLeft: "10%",
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  container: {
    flex: 1,
  },
  errors: {
    fontSize: 10,
    color: "red",
    marginLeft: 45,
    marginTop: 5,
  },
  FlexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    gap: 5,
  },
  flexRow: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  Guest: {
    fontFamily: font.medium,
    color: colors.blue,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
  },
  headerText: {
    fontFamily: font.medium,
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.line,
    height: 50,
    width: "90%",
    marginTop: "5%",
    borderRadius: 12,
    paddingLeft: 20,
    alignSelf: "center",
    fontFamily: font.medium,
    fontSize: 14,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  SignInButtonDisabled: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: colors.disabledButton,
  },
  SignInButtonTextDisabled: {
    color: colors.white,
    fontSize: 16,
    fontFamily: font.bold,
  },
  SignInButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: colors.blue,
  },
  SignInButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: font.bold,
  },
  titleText: {
    textAlign: "center",
    marginTop: "10%",
  },
});
