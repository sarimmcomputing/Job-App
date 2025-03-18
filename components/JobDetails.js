// JobDetails.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const JobDetails = ({ route }) => {
  const { job } = route.params;
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require("../assets/Back-icon.png")}
            style={{ width: 30, height: 30, marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.jobCard}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <View style={styles.jobDetails}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>{job.experience}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>{job.industry}</Text>
          </View>
          <View style={styles.detailItem}>
            <View style={styles.locationContainer}>
              <Image
                source={require("../assets/location-icon.png")}
                style={{ width: 15, height: 15, marginRight: 5 }}
              />
              <Text style={styles.detailText}>{job.location}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.bulletPoint}>•</Text>

        <Text style={styles.detailText}>Education: {job.education}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.bulletPoint}>•</Text>

        <Text style={styles.detailText}>
          Position Detail: {job.positionDetail}
        </Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.bulletPoint}>•</Text>

        <Text style={styles.detailText}>Apply Link :</Text>
        <Text style={styles.applyLink}> {job.applyLink}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    borderBottomColor: "#9E0885",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 50,
    height: 170,
    backgroundColor: "#9E0885",
  },
  jobCard: {
    zIndex: 1,
    marginTop: -60,
    borderWidth: 0.5,
    borderColor: "#9E0885",
    marginLeft: 60,
    width: 250,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#9E0885",
  },
  jobDetails: {
    marginTop: 10,
  },
  detailItem: {
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 10,
  },
  detailText: {
    color: "#000000",
    fontWeight: "bold",
  },
  applyLink: {
    color: "#9E0885",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletPoint: {
    marginRight: 3,
    fontSize: 16,
  },
});

export default JobDetails;
