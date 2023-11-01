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
import { SelectList } from "react-native-dropdown-select-list";

// CONSTANTS
import { colors, font } from "../../constants";

export default function Registration() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [userType, setUserType] = useState();

  const userTypes = [
    { key: "Home/Office User", value: "Home/Office User" },
    { key: "Service Provider", value: "Service Provider" },
  ];

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const RegistrationValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup.string().required("Password cannot be empty!"),
    firstname: yup.string().required("FirstName cannot be empty!"),
    lastname: yup.string().required("LastName cannot be empty!"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(RegistrationValidationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  const PasswordRules = [
    { key: "12 characters", id: 1 },
    { key: "1 upper-case letter", id: 2 },
    { key: "1 lower-case letter", id: 3 },
    { key: "1 number", id: 4 },
    { key: "1 symbol", id: 5 },
  ];

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
            <Text style={styles.headerText}>Create an Account</Text>
          </View>
          <SelectList
            setSelected={(val) => setUserType(val)}
            data={userTypes}
            boxStyles={styles.input}
            placeholder="Select User Type"
            inputStyles={{
              width: "80%",
              alignSelf: "center",
            }}
            dropdownStyles={{
              width: "90%",
              alignSelf: "center",
            }}
          />

          <View style={styles.NameContainer}>
            <View style={styles.halfInput}>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.FirstName}
                    onChangeText={(value) => onChange(value.trim())}
                    value={value}
                    placeholder="First Name*"
                  />
                )}
                name="firstname"
              />
              {errors.firstname && (
                <Text style={styles.errors}>{errors.firstname.message}</Text>
              )}
            </View>

            <View style={styles.halfInput}>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.FirstName}
                    onChangeText={(value) => onChange(value.trim())}
                    value={value}
                    placeholder="Last Name*"
                  />
                )}
                name="lastname"
              />
              {errors.firstname && (
                <Text style={styles.errors}>{errors.lastname.message}</Text>
              )}
            </View>
          </View>
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

          <View style={styles.PasswordRulesContainer}>
            <View style={styles.PasswordRulesContainerBox}>
              <Text style={styles.passwordRulesTitle}>
                Your password must have at least
              </Text>
              {PasswordRules.map((rule) => (
                <Text
                  key={rule.id}
                  style={styles.passwordRulesBullets}
                >{`\u2022 ${rule.key}`}</Text>
              ))}
            </View>
          </View>

          {Object.keys(errors).length > 0 ? (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButtonDisabled}
                disabled={true}
              >
                <Text style={styles.SignInButtonTextDisabled}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButton}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.SignInButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.FlexContainer}>
            <Text style={styles.Account}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.Guest}>Sign In</Text>
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
  errors: {
    fontSize: 10,
    color: "red",
    marginLeft: 45,
    marginTop: 5,
  },
  FirstName: {
    borderWidth: 1,
    borderColor: colors.line,
    height: 50,
    width: "100%",
    marginTop: "5%",
    borderRadius: 12,
    paddingLeft: 20,
    alignSelf: "center",
    fontFamily: font.medium,
    fontSize: 14,
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
  halfInput: {
    width: "43%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "3%",
  },
  headerText: {
    fontFamily: font.bold,
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
  NameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  passwordinput: {
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
  PasswordRulesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  PasswordRulesContainerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: colors.passwordBox,
    width: "90%",
  },
  passwordRulesTitle: {
    marginLeft: "2%",
    marginVertical: "2%",
  },
  passwordRulesBullets: {
    marginLeft: "4%",
    marginBottom: "2%",
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
