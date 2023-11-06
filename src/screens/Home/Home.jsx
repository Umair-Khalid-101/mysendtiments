import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// CONSTANTS
import { colors, font, dummySendtiments } from "../../constants";

// SVG
import { GiftSvg } from "../../svgs";

// COMPONENTS
import { Card } from "../../components";

export default function Home() {
  const navigation = useNavigation();

  const handlePress = (item) => {
    // console.log(item);
    navigation.navigate("SendTimentDetails", { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flexRow}>
          <View style={styles.logoContainer}>
            <GiftSvg />
            <Text style={styles.title}>MySendTiments</Text>
            <Text style={styles.subTitle}>TM</Text>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => console.log("Search")}>
              <Feather name="search" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Settings")}>
              <Ionicons name="settings-outline" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.createdText}>Created: </Text>
      <FlatList
        data={dummySendtiments}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContainer}
        ItemSeparatorComponent={<View style={styles.itemSeperator}></View>}
        ListFooterComponent={<View style={styles.itemSeperator}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createdText: {
    fontFamily: font.medium,
    fontSize: 24,
    marginTop: "5%",
    marginLeft: "7%",
  },
  flatlistContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30%",
    marginTop: "10%",
  },
  header: {
    height: 120,
    backgroundColor: colors.headerColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginRight: "7%",
  },
  itemSeperator: {
    height: 20,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginLeft: "7%",
  },
  subTitle: {
    fontFamily: font.medium,
    fontSize: 10,
    marginBottom: 14,
  },
  title: {
    fontFamily: font.bold,
    fontSize: 20,
  },
});
