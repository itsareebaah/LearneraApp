import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const options = [
    { title: "My Certifications", icon: "school-outline", screen: "Certifications" },
    { title: "My Projects", icon: "briefcase-outline", screen: "Projects" },
    { title: "Saved Courses", icon: "bookmark-outline", screen: "SavedCourses" },
    { title: "My Card", icon: "card-outline", screen: "MyCard" },
    { title: "Help Center", icon: "help-circle-outline", screen: "Help" },
    { title: "Privacy Policy", icon: "lock-closed-outline", screen: "Privacy" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={require("./profile.jpg")} style={styles.profileImage} />
        <Text style={styles.name}>Areeba Ahmad</Text>
        <TouchableOpacity style={styles.editProfile}>
          {/* <Ionicons name="pencil" size={16} color="gray" />
          <Text style={styles.editText}>Edit Profile</Text> */}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.optionsContainer}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Ionicons name={item.icon} size={24} color="#6200EE" />
            <Text style={styles.optionText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#aaa" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 30,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#ddd",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 15,
    color: "#333",
  },
  editProfile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  editText: {
    color: "gray",
    marginLeft: 5,
  },
  optionsContainer: {
    marginTop: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3E8FF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: "#333",
  },
});

export default ProfileScreen;
