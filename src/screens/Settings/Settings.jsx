import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// CONSTANTS
import { font, colors } from "../../constants";

export default function Settings() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="ios-chevron-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.flexView}
          onPress={() => navigation.navigate("AccountSettings")}
        >
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={32}
            color="black"
          />
          <Text style={styles.title}>Account Settings</Text>
          <Entypo name="chevron-small-right" size={32} color="black" />
        </TouchableOpacity>
        <View style={styles.itemSeperator}></View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.flexView}
          onPress={() => navigation.navigate("Terms")}
        >
          <AntDesign name="filetext1" size={32} color="black" />
          <Text style={styles.title}>Terms & Conditions</Text>
          <Entypo name="chevron-small-right" size={32} color="black" />
        </TouchableOpacity>
        <View style={styles.itemSeperator}></View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.flexView}
          onPress={() => navigation.navigate("PrivacyPolicy")}
        >
          <MaterialCommunityIcons
            name="file-lock-outline"
            size={32}
            color="black"
          />
          <Text style={styles.title}>Privacy Policy</Text>
          <Entypo name="chevron-small-right" size={32} color="black" />
        </TouchableOpacity>
        <View style={styles.itemSeperator}></View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.flexView}
          onPress={() => navigation.navigate("HowToUse")}
        >
          <Entypo name="info" size={24} color="black" />
          <Text style={styles.title}>How To Use</Text>
          <Entypo name="chevron-small-right" size={32} color="black" />
        </TouchableOpacity>
        <View style={styles.itemSeperator}></View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.flexView}
          onPress={() => navigation.navigate("SignUp")}
        >
          <AntDesign name="poweroff" size={30} color="red" />
          <Text style={styles.logOut}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 0.4,
    marginLeft: "10%",
  },
  container: {
    flex: 1,
  },
  flexView: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginHorizontal: "7%",
    gap: 10,
    marginVertical: "5%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "5%",
  },
  headerText: {
    fontFamily: font.medium,
    fontSize: 24,
  },
  itemSeperator: {
    height: 1,
    backgroundColor: colors.line,
    alignSelf: "center",
    width: "90%",
  },
  logOut: {
    width: "65%",
    fontFamily: font.medium,
    fontSize: 18,
    color: "red",
  },
  title: {
    width: "65%",
    fontFamily: font.medium,
    fontSize: 18,
  },
});
