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

export default function PrivacyPolicy() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="ios-chevron-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Privacy Policy</Text>
        </View>
        <View style={styles.PrivacyPolicyContainer}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            dolores ea distinctio suscipit facilis quidem, quaerat unde aliquid
            ipsam, praesentium voluptatem mollitia cumque enim sequi ipsum
            sapiente eaque beatae consequuntur. Ipsa, veritatis consectetur
            delectus accusamus nihil quae ducimus suscipit nemo, omnis
            praesentium ea aperiam error fuga voluptatem est quis rerum magni
            amet atque nisi esse dolorum asperiores a. Velit, eius. Vel illo
            alias expedita minima temporibus veniam, repellendus incidunt error
            soluta id vero delectus reprehenderit suscipit. Temporibus, ipsam,
            veniam exercitationem optio, assumenda neque fuga excepturi
            dignissimos debitis est nostrum nemo? Iusto commodi voluptates
            officia, eum quod itaque delectus! Laudantium delectus provident,
            fugit beatae ipsa consequatur nostrum sed animi laboriosam minus
            officiis! Doloremque iste modi facere praesentium ea culpa tenetur
            deserunt! Placeat, cum minus? Facilis temporibus cumque sed qui
            tempora sint deleniti ipsam doloremque voluptatem, perspiciatis
            eligendi reprehenderit eveniet harum quam, quo aperiam autem iusto
            officia in? Eveniet quidem distinctio illo.
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
  PrivacyPolicyContainer: {
    marginRight: "5%",
    marginLeft: "7%",
    marginTop: "5%",
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
