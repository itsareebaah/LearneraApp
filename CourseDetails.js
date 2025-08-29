import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CourseDetails = ({ route, navigation }) => {
  const { course } = route.params; // Ensure course data is received

  return (
    <View style={styles.container}>
      
      <Image source={course.image} style={styles.courseImage} />
      <Text style={styles.courseTitle}>{course.title}</Text>
      <Text style={styles.courseDuration}>⏳ {course.duration}</Text>
      <Text style={styles.instructor}>👤 Instructor: {course.instructor}</Text>
      <Text style={styles.oldText}>About this course</Text>
      <Text style={styles.newText}>Welcome to Learnera courses. You will learn a lot in this course and we will 
        take you from beginner lessons to advanced lessson. You will be able to master the skills of this field
        after ateending all the lectures , taking help from notes and giving quizes.
      </Text>
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => {
  switch(course.title) {
    case "UI/UX Masterclass":
      navigation.navigate("UI");
      break;
    case "Complete Phython Course":
      navigation.navigate("Python");
      break;
    case "Software Development":
      navigation.navigate("Software");
      break;
    case "Game Development":
      navigation.navigate("Game");
      break;
    default:
      alert("Screen not found for this course.");
  }
}}

      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  oldText:{
    marginTop:20,
    fontSize:23,
    margin:10,
    textAlign:'center',
    fontWeight:'bold',
    color: "#2F2F9F",
},
  newText:{
      font:20,
      
  },
  courseImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  courseDuration: {
    fontSize: 16,
    color: "gray",
  },
  startButton: {
    backgroundColor: "#2F2F9F",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  instructor: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default CourseDetails;  // Ensure Default Export
