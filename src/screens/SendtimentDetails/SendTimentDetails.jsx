import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// DUMMY PICTURE
import dummySendtiment from "../../../assets/images/Sendtiment1.png";

// CONSTANTS
import { colors, font } from "../../constants";
const { height } = Dimensions.get("window");

// SVGS
import { DummyQRSvg } from "../../svgs";

export default function () {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params?.item;

  //   console.log("Details: ", data);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={dummySendtiment}
          style={styles.backGroundImage}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="ios-chevron-back" size={28} color="black" />
          </TouchableOpacity>
          <DummyQRSvg />
          <TouchableOpacity style={styles.fullScreenLogoContainer}>
            <MaterialIcons
              name="fullscreen"
              size={32}
              style={styles.fullScreenLogo}
            />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.flexRow}>
          <View style={styles.iconTextContainer}>
            <Feather name="calendar" size={20} color={colors.gray} />
            <Text style={styles.lightText}>{data.date}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <MaterialCommunityIcons
              name="clock-time-eight-outline"
              size={20}
              color={colors.gray}
            />
            <Text style={styles.lightText}>{data.time}</Text>
          </View>
        </View>
        <View style={styles.urlContainer}>
          <Text style={styles.urlText}>{data.url}</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="content-copy"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.printButton}>
            <Text style={styles.qrText}>Print QR Code</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit SendTiment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    height: 50,
    width: 50,
    top: 50,
    left: 20,
    borderRadius: 10,
    backgroundColor: colors.lightgray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  backGroundImage: {
    height: height * 0.5,
    width: "100%",
    resizeMode: "cover",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  container: {
    flex: 1,
  },
  editButton: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  editText: {
    fontFamily: font.medium,
    color: colors.blue,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "5%",
    marginLeft: "7%",
    gap: 10,
  },
  fullScreenLogo: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 20,
    bottom: 20,
    color: "white",
  },
  fullScreenLogoContainer: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0,
  },
  iconTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  lightText: {
    color: colors.gray,
  },
  printButton: {
    width: "90%",
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  qrText: {
    fontFamily: font.medium,
    color: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontFamily: font.bold,
    fontSize: 24,
    marginTop: "5%",
    marginLeft: "7%",
  },
  urlContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "7%",
    marginTop: "5%",
  },
  urlText: {
    width: "90%",
    textAlign: "left",
    fontFamily: font.medium,
    fontSize: 12,
    textDecorationLine: "underline",
  },
});
