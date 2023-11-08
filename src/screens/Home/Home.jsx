import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// CONSTANTS
import { colors, font, dummySendtiments, sortFilters } from "../../constants";

// SVG
import { GiftSvg } from "../../svgs";

// COMPONENTS
import { Card } from "../../components";

export default function Home() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Newest to Oldest");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePress = (item) => {
    // console.log(item);
    navigation.navigate("SendTimentDetails", { item });
  };

  const handleFilter = (option) => {
    setSelectedFilter(option);
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
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Ionicons name="settings-outline" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.createdAndFilter}>
        <Text style={styles.createdText}>
          Created: {dummySendtiments.length}
        </Text>
        <TouchableOpacity style={styles.filterButton} onPress={openModal}>
          <MaterialCommunityIcons name="sort" size={24} color="black" />
          <Text>Sort by</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort By</Text>
            {sortFilters.map((filter) => (
              <TouchableOpacity
                key={filter.id}
                style={styles.filterContainer}
                onPress={() => handleFilter(filter.filter)}
              >
                <Text style={styles.filterOptionText}>{filter.filter}</Text>
                {selectedFilter === filter.filter && (
                  <View>
                    <AntDesign
                      name="check"
                      size={24}
                      style={styles.filterSelectedIcon}
                    />
                  </View>
                )}
              </TouchableOpacity>
            ))}
            <View style={styles.modelCloseButtonContainer}>
              <TouchableOpacity
                onPress={closeModal}
                style={styles.modelCloseButton}
              >
                <Text style={styles.modalCloseButtonText}>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      <FlatList
        data={dummySendtiments}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContainer}
        ItemSeparatorComponent={<View style={styles.itemSeperator}></View>}
        ListFooterComponent={<View style={styles.itemSeperator}></View>}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("CreateSendTiment")}
      >
        <Feather name="plus" size={24} color={colors.white} />
      </TouchableOpacity>
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
  },
  createdAndFilter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "7%",
    marginVertical: "5%",
  },
  filterButton: {
    width: "40%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    gap: 5,
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3%",
    marginLeft: "7%",
  },
  filterOptionText: {
    fontFamily: font.medium,
    fontSize: 16,
  },
  filterSelectedIcon: {
    marginRight: "7%",
    color: colors.checkColor,
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
    gap: 30,
    marginTop: "10%",
  },
  floatingButton: {
    position: "absolute",
    bottom: 60,
    right: 30,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.blue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  modalContainer: {
    height: 360,
    backgroundColor: colors.white,
    borderRadius: 30,
  },
  modalContent: {
    marginTop: "10%",
  },
  modelCloseButton: {
    width: "80%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 8,
    marginTop: "10%",
  },
  modelCloseButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCloseButtonText: {
    fontFamily: font.medium,
    color: colors.white,
  },
  modalTitle: {
    fontFamily: font.bold,
    marginTop: "10%",
    fontSize: 20,
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
