import {
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Modal,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

// CONSTANTS
import { colors, font } from "../../constants";

// DUMMY PICTURE
import dummySendtiment from "../../../assets/images/Sendtiment1.png";

const { height } = Dimensions.get("window");

export default function EditSendTiment() {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params?.item;
  //   console.log("Details: ", data);
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    delete result.cancelled;
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const sendTimentValidationSchema = yup.object().shape({
    title: yup.string().required("A Title is Required"),
    url: yup.string().required("Desired URL cannot be empty!"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(sendTimentValidationSchema),
    defaultValues: {
      title: data ? data.title : "",
      url: data ? data.url : "",
    },
  });

  const onSubmit = async (data) => {
    // if (!image) {
    //   Toast.show({
    //     type: "error",
    //     text1: "No Image",
    //     text2: "Image is required",
    //     position: "top",
    //   });
    //   return;
    // }
    console.log(data);
    setModalVisible(true);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicons name="ios-chevron-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Edit SendTiment</Text>
          </View>

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={(value) => onChange(value.trim())}
                value={value}
                placeholder="SendTiment Title"
              />
            )}
            name="title"
          />
          {errors.title && (
            <Text style={styles.errors}>{errors.title.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={(value) => onChange(value.trim())}
                value={value}
                placeholder="Desired URL"
              />
            )}
            name="url"
          />
          {errors.url && (
            <Text style={styles.errors}>{errors.url.message}</Text>
          )}

          {!image && (
            <TouchableOpacity
              style={styles.imageViewContainer}
              onPress={pickImage}
            >
              <ImageBackground
                source={dummySendtiment}
                style={styles.imageAndLogo}
              >
                <View style={styles.overlay} />
                <Feather name="camera" size={50} color="white" />
                <Text style={styles.editImageInputText}>Upload New Image</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}

          {image && (
            <TouchableOpacity
              style={styles.imageViewContainer}
              onPress={pickImage}
            >
              <ImageBackground
                source={{ uri: image }}
                style={styles.imageAndLogo}
              >
                <View style={styles.overlay} />
                <Feather name="camera" size={50} color="white" />
                <Text style={styles.editImageInputText}>Edit Image</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}

          {Object.keys(errors).length > 0 ? (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButtonDisabled}
                disabled={true}
              >
                <Text style={styles.SignInButtonTextDisabled}>
                  Save Changes
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.SignInButton}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.SignInButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.cancelButtonText}>Cancel Changes</Text>
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
                <View style={styles.flexView}>
                  <AntDesign
                    name="checkcircleo"
                    size={50}
                    color={colors.checkColor}
                  />
                  <Text style={styles.heading}>Changes Saved</Text>
                  <Text style={styles.subHeading}>
                    You have successfully saved the changes
                  </Text>
                </View>
                <View style={styles.modelCloseButtonContainer}>
                  <TouchableOpacity
                    onPress={closeModal}
                    style={styles.modelCloseButton}
                  >
                    <Text style={styles.modalCloseButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 0.4,
    marginLeft: "10%",
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  cancelButton: {
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.blue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    fontFamily: font.medium,
    color: colors.blue,
  },
  container: {
    flex: 1,
  },
  editImageInputText: {
    fontFamily: font.medium,
    fontSize: 18,
    marginTop: 10,
    color: colors.white,
  },
  errors: {
    fontSize: 10,
    color: "red",
    marginLeft: 45,
    marginTop: 5,
  },
  flexView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "5%",
  },
  headerText: {
    fontFamily: font.medium,
    fontSize: 20,
  },
  heading: {
    fontFamily: font.medium,
    fontSize: 20,
    textAlign: "center",
    marginTop: "5%",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.line,
    height: 50,
    width: "90%",
    marginTop: "5%",
    borderRadius: 12,
    paddingLeft: 20,
    alignSelf: "center",
    fontFamily: font.medium,
    fontSize: 14,
  },
  imageAndLogo: {
    height: 250,
    width: "100%",
    marginTop: "5%",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    overflow: "hidden",
  },
  imageInput: {
    height: 250,
    width: "90%",
    marginTop: "5%",
    alignSelf: "center",
    backgroundColor: colors.disabledButton,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageInputText: {
    fontFamily: font.medium,
    fontSize: 18,
    marginTop: 10,
  },
  imageViewContainer: {
    height: 250,
    width: "90%",
    marginVertical: "5%",
    alignSelf: "center",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  modalContainer: {
    height: height * 0.5,
    backgroundColor: colors.white,
    borderRadius: 30,
    marginTop: "auto",
  },
  modalContent: {
    marginTop: "2%",
  },
  modelCloseButton: {
    width: "80%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 8,
    marginTop: "5%",
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
    fontSize: 14,
  },
  modalTitle: {
    fontFamily: font.bold,
    marginTop: "10%",
    fontSize: 20,
    marginLeft: "7%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  SignInButtonDisabled: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: colors.disabledButton,
  },
  SignInButtonTextDisabled: {
    color: colors.white,
    fontSize: 16,
    fontFamily: font.bold,
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
  subHeading: {
    fontFamily: font.medium,
    textAlign: "center",
    marginTop: "3%",
  },
});
