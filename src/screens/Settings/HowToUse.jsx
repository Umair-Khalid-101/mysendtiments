import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// CONSTANTS
import { font, colors } from "../../constants";

export default function HowToUse() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="ios-chevron-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>How To Use</Text>
        </View>
      </ScrollView>
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
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
  },
  headerText: {
    fontFamily: font.medium,
    fontSize: 24,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
