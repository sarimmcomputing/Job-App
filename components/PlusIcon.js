// PlusIcon.js
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlusIcon = () => {
  const navigation = useNavigation();

  const handleIconPress = () => {
    navigation.navigate("JobPosting");
  };

  return (
    <TouchableOpacity onPress={handleIconPress}>
      <View style={styles.container}>
        <Image
          source={require("../assets/plus-icon.png")}
          style={{ width: 60, height: 60 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlusIcon;
