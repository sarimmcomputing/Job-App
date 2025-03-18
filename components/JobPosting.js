// JobPosting.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const JobPosting = () => {
  const navigation = useNavigation();

  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState("");
  const [positionDetail, setPositionDetail] = useState("");
  const [applyLink, setApplyLink] = useState("");

  const handlePostJob = () => {
    if (
      !jobTitle ||
      !experience ||
      !industry ||
      !location ||
      !education ||
      !positionDetail ||
      !applyLink
    ) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "All fields are required",
      });
    } else {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Job successfully posted",
      });
      navigation.goBack();
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainheader}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require("../assets/Back-icon.png")}
            style={{ width: 30, height: 30, marginRight: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/bell-icon.png")}
            style={{ width: 30, height: 30, marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Post </Text>
        <Text style={styles.headerText}>Your Job</Text>
      </View>

      <ScrollView>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Job Title"
            value={jobTitle}
            onChangeText={(text) => setJobTitle(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Experience"
            value={experience}
            onChangeText={(text) => setExperience(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Industry"
            value={industry}
            onChangeText={(text) => setIndustry(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Education"
            value={education}
            onChangeText={(text) => setEducation(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Position Detail"
            value={positionDetail}
            onChangeText={(text) => setPositionDetail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Apply Link"
            value={applyLink}
            onChangeText={(text) => setApplyLink(text)}
          />

          <TouchableOpacity style={styles.postButton} onPress={handlePostJob}>
            <Text style={styles.postButtonText}>Post Job</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "coloumn",
    justifyContent: "space-between",
    alignItems: "start",
    borderBottomColor: "#9E0885",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#9E0885",
  },
  mainheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#9E0885",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#9E0885",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
  },
  form: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#9E0885",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  postButton: {
    backgroundColor: "#9E0885",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  postButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default JobPosting;
