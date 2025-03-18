// JobListing.js
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { jobData } from "./Constant";
import PlusIcon from "./PlusIcon"; // Import the PlusIcon component

const JobListing = () => {
  const navigation = useNavigation();

  const handleJobCardPress = (job) => {
    navigation.navigate("JobDetails", { job });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Let's Find </Text>
          <Text style={styles.headerText}>Your Jobs</Text>
        </View>
        <TouchableOpacity style={styles.bellIcon}>
          <Image
            source={require("../assets/bell-icon.png")}
            style={{ width: 25, height: 25, tintColor: "#fff" }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Jobs For You</Text>

      <ScrollView>
        {jobData.map((job) => (
          <TouchableOpacity
            key={job.id}
            style={styles.jobCard}
            onPress={() => handleJobCardPress(job)}
          >
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
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* PlusIcon component added to the bottom right corner */}
      <View style={styles.plusIconContainer}>
        <PlusIcon />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#9E0885",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#9E0885",
    marginBottom: 10,
  },
  headerContent: {
    height: 150,
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: 5,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
    paddingLeft: 5,
  },
  bellIcon: {
    padding: 5,
    marginTop: -70,
  },
  title: {
    width: 125,
    textAlign: "center",
    color: "#000000C7",
    paddingTop: 3,
    fontSize: 15,
    fontWeight: "800",
  },
  jobCard: {
    borderWidth: 1,
    borderColor: "#D9D9D9D1",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
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
  },
  detailText: {
    color: "#000000",
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusIconContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default JobListing;
