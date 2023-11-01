import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// CONSTANTS
import { colors, font } from "../../constants";

export default function SignIn() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const signInValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup.string().required("Password cannot be empty!"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signInValidationSchema),
  });

  const onSubmit = async (data) => {
    data.remember = isChecked;
    console.log(data);
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
              onPress={() => navigation.navigate("SignUp")}
            >
              <Ionicons name="ios-chevron-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Sign In</Text>
          </View>
          <Text style={styles.email}>Email</Text>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={(value) => onChange(value.trim())}
                value={value}
                placeholder="Email Address"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.errors}>{errors.email.message}</Text>
          )}

          <Text style={styles.password}>Password</Text>

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <View style={styles.iconTextInput}>
                <TextInput
                  value={value}
                  onChangeText={(value) => onChange(value.trim())}
                  secureTextEntry={hidePassword}
                  placeholder="Enter your password"
                  style={styles.passwordinput}
                />
                <TouchableOpacity onPress={toggleHidePassword}>
                  <MaterialIcons
                    name={hidePassword ? "visibility-off" : "visibility"}
                    size={24}
                    color="black"
                    style={styles.toggleButton}
                  />
                </TouchableOpacity>
              </View>
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.errors}>{errors.password.message}</Text>
          )}

          <View style={styles.RememberAndForgotContainer}>
            <View style={styles.ChechBoxContainer}>
              <TouchableOpacity onPress={toggleCheckbox}>
                <View
                  style={[
                    styles.checkbox,
                    isChecked ? styles.checked : styles.unchecked,
                  ]}
                >
                  {isChecked && (
                    <MaterialIcons name="check" size={20} color="white" />
                  )}
                </View>
              </TouchableOpacity>
              <Text style={styles.RememberMeText}>Remember Me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.ForgotPasswordText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          {Object.keys(errors).length > 0 ? (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButtonDisabled}
                disabled={true}
              >
                <Text style={styles.SignInButtonTextDisabled}>Sign In</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButton}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.SignInButtonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.LineContainer}>
            <View style={styles.LeftLine}></View>
            <Text style={styles.LineText}>Or</Text>
            <View style={styles.RightLine}></View>
          </View>

          <View style={styles.RegistrationButtonContainer}>
            <TouchableOpacity
              style={styles.RegistrationButton}
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.RegistrationButtonText}>
                Create an Account
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.FlexContainer}>
            <Text style={styles.Account}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.Guest}>Continue as Guest</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.TermsContainer}>
            <View style={styles.TermsTextContainer}>
              <Text style={styles.TermsText}>
                This app is protected by reCAPTCHA and the Google
              </Text>
              <View style={styles.PressableTextContainer}>
                <TouchableOpacity>
                  <Text style={styles.PressableText}>Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={styles.TermsText}>and</Text>
                <TouchableOpacity>
                  <Text style={styles.PressableText}>Terms of Services</Text>
                </TouchableOpacity>
                <Text style={styles.TermsText}>apply</Text>
              </View>
            </View>
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
  ChechBoxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  email: {
    fontSize: 12,
    fontFamily: font.medium,
    color: colors.grey,
    marginTop: "5%",
    marginLeft: "5%",
  },
  errors: {
    fontSize: 10,
    color: "red",
    marginLeft: 45,
    marginTop: 5,
  },
  ForgotPasswordText: {
    fontSize: 16,
    fontFamily: font.medium,
  },
  FlexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    gap: 5,
  },
  Guest: {
    fontFamily: font.medium,
    color: colors.blue,
  },
  iconTextInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
  },
  headerText: {
    fontFamily: font.bold,
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.line,
    height: 50,
    width: "90%",
    marginTop: "2%",
    borderRadius: 12,
    paddingLeft: 20,
    alignSelf: "center",
    fontFamily: font.medium,
    fontSize: 14,
  },
  keyboardAvoidingContainer: {
    flex: 1,
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
  password: {
    fontSize: 12,
    fontFamily: font.medium,
    color: colors.grey,
    marginTop: "5%",
    marginLeft: "5%",
  },
  passwordinput: {
    borderWidth: 1,
    borderColor: colors.line,
    height: 50,
    width: "90%",
    marginTop: "2%",
    borderRadius: 12,
    paddingLeft: 20,
    alignSelf: "center",
    fontFamily: font.medium,
    fontSize: 14,
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
  RememberAndForgotContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "8%",
    marginTop: "5%",
  },
  RememberMeText: {
    fontSize: 16,
    fontFamily: font.medium,
  },
  RegistrationButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
    borderColor: colors.blue,
    borderWidth: 1,
  },
  RegistrationButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  RegistrationButtonText: {
    color: colors.blue,
    fontFamily: font.medium,
    fontSize: 15,
  },
  RightLine: {
    height: 1,
    width: "35%",
    backgroundColor: colors.line,
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
  toggleButton: {
    position: "absolute",
    right: 10,
    top: -8,
  },
  unchecked: {
    borderColor: "#757575",
  },
});
