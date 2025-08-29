import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const Game = ({ navigation }) => {
  const modules = [
    { id: 1, title: "Introduction to Game Development", duration: "5 min" },
    { id: 2, title: "Game Engines Overview", duration: "8 min" },
    { id: 3, title: "Unity Basics", duration: "12 min" },
    { id: 4, title: "2D Game Development", duration: "15 min" },
    { id: 5, title: "3D Game Development", duration: "20 min" },
    { id: 6, title: "Publishing Your Game", duration: "10 min" },
  ];

  return (
    <ScrollView style={styles.container}>
     
      <Text style={styles.title}>🎮 Game Development</Text>
       <Image
        source={require("./game.jpg")} // Replace with your game course image
        style={styles.banner}
      />
      <Text style={styles.instructor}>👨‍🏫 Instructor: Jane Smith</Text>
      <Text style={styles.description}>
        In this course, you will explore the fundamentals of game development
        including game engines, graphics, physics, and publishing. Build your
        own games and launch them!
      </Text>

      <Text style={styles.sectionTitle}>📘 Course Modules</Text>
      {modules.map((module) => (
        <TouchableOpacity key={module.id} style={styles.moduleCard}>
          <Text style={styles.moduleText}>{module.title}</Text>
          <Text style={styles.moduleDuration}>⏳ {module.duration}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>🛠 Tools & Resources</Text>
      <View style={styles.resourceContainer}>
        <TouchableOpacity
          style={styles.resourceButton}
          onPress={() => navigation.navigate("NotesScreen")}
        >
          <Text style={styles.resourceText}>📒 Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resourceButton}
          onPress={() => navigation.navigate("QuizScreen")}
        >
          <Text style={styles.resourceText}>🧠 Quiz</Text>
        </TouchableOpacity>
        
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}onPress={() => navigation.navigate("NotesScreen")}>Start Learning</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 15,
    color: "#2F2F9F",
  },
  instructor: {
    fontSize: 16,
    color: "#444",
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    color: "#2F2F9F",
  },
  moduleCard: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
  },
  moduleText: {
    fontSize: 16,
    fontWeight: "600",
  },
  moduleDuration: {
    color: "gray",
    marginTop: 5,
  },
  resourceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  resourceButton: {
    backgroundColor: "#E0E7FF",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  resourceText: {
    fontWeight: "bold",
    color: "#2F2F9F",
  },
  startButton: {
    backgroundColor: "#2F2F9F",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 30,
  },
  startButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Game;
