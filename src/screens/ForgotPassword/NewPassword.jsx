import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MaterialIcons } from "@expo/vector-icons";

// CONSTANTS
import { colors, font } from "../../constants";

export default function NewPassword() {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const newPasswordValidationSchema = yup.object().shape({
    password: yup.string().required("Password is Required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is Required")
      .oneOf([yup.ref("password")], "Passwords don't match"),
    recoverypin: yup.string().required("Recovery pin is Required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(newPasswordValidationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    navigation.navigate("PasswordSet");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.headerText}>Create New Password</Text>

          <View style={styles.flexRow}>
            <Text style={styles.titleText}>
              New password must be different from your last password
            </Text>
          </View>

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={(value) => onChange(value.trim())}
                value={value}
                placeholder="Recovery Pin*"
                keyboardType="numeric"
              />
            )}
            name="recoverypin"
          />
          {errors.recoverypin && (
            <Text style={styles.errors}>{errors.recoverypin.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <View style={styles.iconTextInput}>
                <TextInput
                  value={value}
                  onChangeText={(value) => onChange(value.trim())}
                  secureTextEntry={hidePassword}
                  placeholder="New Password"
                  style={styles.passwordInput}
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

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <View style={styles.iconTextInput}>
                <TextInput
                  value={value}
                  onChangeText={(value) => onChange(value.trim())}
                  secureTextEntry={hidePassword}
                  placeholder="Confirm Password"
                  style={styles.passwordInput}
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
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <Text style={styles.errors}>{errors.confirmPassword.message}</Text>
          )}

          {Object.keys(errors).length > 0 ? (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButtonDisabled}
                disabled={true}
              >
                <Text style={styles.SignInButtonTextDisabled}>
                  Create Password
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButton}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.SignInButtonText}>Create Password</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
    fontFamily: font.medium,
    fontSize: 18,
    marginVertical: "5%",
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
  iconTextInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  passwordInput: {
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
    width: "80%",
    fontFamily: font.medium,
    fontSize: 14,
  },
  toggleButton: {
    position: "absolute",
    right: 10,
    top: -8,
  },
});
