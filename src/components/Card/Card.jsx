import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// IMAGE
import dummyImage from "../../../assets/images/Sendtiment1.png";

// CONSTANTS
import { font, colors } from "../../constants";

export default function Card({ item, onPress }) {
  //   console.log(item);
  return (
    <TouchableOpacity style={styles.shadowBox} onPress={() => onPress(item)}>
      <Image source={dummyImage} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.flexRow}>
        <View style={styles.iconTextContainer}>
          <Feather name="calendar" size={18} color={colors.gray} />
          <Text style={styles.lightText}>{item.date}</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <MaterialCommunityIcons
            name="clock-time-eight-outline"
            size={18}
            color={colors.gray}
          />
          <Text style={styles.lightText}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20,
    gap: 30,
  },
  iconTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  image: {
    width: "100%",
    height: "75%",
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lightText: {
    color: colors.gray,
  },
  shadowBox: {
    width: width * 0.9,
    height: 350,
    backgroundColor: "white",
    borderRadius: 10, // Optional: Add borderRadius for rounded corners
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5, // This is for Android shadow effect
  },
  title: {
    fontFamily: font.bold,
    marginTop: 10,
    marginLeft: 20,
    fontSize: 18,
  },
});
