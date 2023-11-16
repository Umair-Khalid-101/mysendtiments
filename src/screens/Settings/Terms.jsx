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

export default function Terms() {
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
          <Text style={styles.headerText}>Terms & Conditions</Text>
        </View>
        <View style={styles.termsContainer}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            praesentium labore voluptatum, quam optio assumenda porro
            consequatur sed vitae eligendi velit ut cupiditate amet quis
            explicabo aperiam libero iste soluta. Molestiae rerum aspernatur
            incidunt porro nemo iste id repudiandae laborum excepturi fuga,
            veritatis doloremque. Consectetur minus accusantium porro quam sunt
            expedita, voluptatem, sit dicta, corporis officiis officia ut
            obcaecati dolores? Assumenda earum facilis nobis saepe impedit vitae
            voluptas laudantium eius totam, animi unde quaerat nostrum. Dolore
            praesentium velit adipisci officiis obcaecati libero quasi fuga, a,
            maiores ea esse saepe quae? Repellendus natus dignissimos distinctio
            quidem architecto cumque impedit reiciendis voluptates, rem ex porro
            maxime atque id dolor suscipit perferendis accusamus aspernatur,
            quas maiores ipsam nisi sit cum delectus? Eaque, necessitatibus.
            Adipisci et est laboriosam soluta ea iusto iure nihil facilis
            voluptatibus nam, libero deserunt veritatis dolor non optio animi
            nostrum quibusdam vero reiciendis rem amet tenetur nulla alias.
            Exercitationem, nisi.
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
  scrollContainer: {
    flexGrow: 1,
  },
  termsContainer: {
    marginRight: "5%",
    marginLeft: "7%",
    marginTop: "5%",
  },
});
