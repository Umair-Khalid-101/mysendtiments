import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// CONSTANTS
import { colors, font } from "../../constants";

export default function CreateNewPassword() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Create New Password</Text>
      <View style={styles.checkContainer}>
        <AntDesign name="checkcircleo" size={32} color={colors.checkColor} />
      </View>
      <Text style={styles.title}>Email Sent!</Text>
      <Text style={styles.subTitle}>
        Check your inbox and reset your password
      </Text>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.ResetButton}
          onPress={() => navigation.navigate("NewPassword")}
        >
          <Text style={styles.ResetButtonText}>Create New Password</Text>
        </TouchableOpacity>
      </View>
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
  checkContainer: {
    marginTop: "5%",
    marginLeft: "7%",
  },
  headerText: {
    textAlign: "center",
    fontFamily: font.medium,
    fontSize: 18,
    marginVertical: "5%",
  },
  ResetButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: colors.blue,
  },
  ResetButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: font.bold,
  },
  subTitle: {
    marginLeft: "7%",
    marginTop: "5%",
    fontFamily: font.medium,
    fontSize: 14,
  },
  title: {
    marginLeft: "7%",
    marginTop: "5%",
    fontFamily: font.bold,
    fontSize: 20,
  },
});
