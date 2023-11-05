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

// DUMMY PICTURE
import dummySendtiment from "../../../assets/images/Sendtiment1.png";

// CONSTANTS
import { colors } from "../../constants";

const { height } = Dimensions.get("window");

export default function () {
  const route = useRoute();
  const data = route.params?.item;

  //   console.log("Details: ", data);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={dummySendtiment}
          style={styles.backGroundImage}
        >
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="ios-chevron-back" size={28} color="black" />
          </TouchableOpacity>
          <Text>QR CODE</Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
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
  container: {
    flex: 1,
  },
  backGroundImage: {
    height: height * 0.5,
    width: "100%",
    resizeMode: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
