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
        <View style={styles.howToUseContainer}>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            sed dolore dolores saepe deleniti maiores. Quae nihil accusamus quos
            molestias aspernatur vero animi? Modi, ipsum possimus ullam nisi
            alias quaerat! Eligendi omnis neque id, quia sint tempore doloremque
            cum sapiente velit veritatis assumenda ut rem tempora, enim
            voluptatum voluptate adipisci excepturi? Dicta voluptas praesentium
            voluptatem quos possimus libero sit temporibus. Ipsa, sequi? Veniam
            inventore quia velit saepe officiis, esse rem, pariatur
            necessitatibus nobis molestiae nihil suscipit ratione, sequi amet
            voluptatibus. Consectetur odit eveniet dolore, impedit error fugit
            hic fuga consequuntur. Repudiandae minus harum quod tempore fugiat
            aspernatur at, quas officiis veritatis eligendi dolor dicta
            explicabo ut nemo excepturi veniam fugit asperiores placeat magnam
            ea libero. Dolorum animi quidem earum perspiciatis. In illum culpa
            at quo necessitatibus eaque modi dolore amet saepe rerum tenetur
            corporis dolorum provident ad ex atque quis ipsa rem architecto
            officia blanditiis, iste omnis repudiandae quaerat! Iste!
          </Text>
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
  howToUseContainer: {
    marginRight: "5%",
    marginLeft: "7%",
    marginTop: "5%",
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
