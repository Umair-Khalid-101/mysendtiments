import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Toast from "react-native-toast-message";
import { Feather } from "@expo/vector-icons";

// CONSTANTS
import { colors, font } from "../../constants";

export default function SearchSendTiments() {
  const navigation = useNavigation();

  const searchValidationSchema = yup.object().shape({
    search: yup.string().required("Search cannot be empty!"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(searchValidationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={(value) => onChange(value.trim())}
                value={value}
                placeholder="Search..."
              />
            )}
            name="search"
          />
          {errors.search && (
            <Text style={styles.errors}>{errors.search.message}</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Feather name="search" size={20} color={colors.gray} />
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.SignInButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.SignInButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  container: {
    flex: 1,
  },
  errors: {
    fontSize: 10,
    color: "red",
    marginTop: 10,
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.line,
    height: 50,
    width: "100%",
    borderRadius: 12,
    paddingLeft: 20,
    alignSelf: "center",
    fontFamily: font.medium,
    fontSize: 14,
  },
  inputContainer: {
    width: "80%",
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5%",
    marginHorizontal: "5%",
  },
  searchButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 8,
  },
  SignInButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: colors.blue,
  },
  SignInButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: font.bold,
  },
});
