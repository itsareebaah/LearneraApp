import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const UI = ({ navigation }) => {
  const modules = [
    { id: 1, title: "UI vs UX", duration: "5 min" },
    { id: 2, title: "Design Principles", duration: "8 min" },
    { id: 3, title: "Wireframes & Prototypes", duration: "7 min" },
    { id: 4, title: "Color & Typography", duration: "6 min" },
    { id: 5, title: "Figma for Beginners", duration: "10 min" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎨 UI/UX Design</Text>
      <Image
        source={require("./ux.jpg")}
        style={styles.banner}
      />
      <Text style={styles.instructor}>👩‍🏫 Instructor: Jessica Lee</Text>
      <Text style={styles.description}>
        Master the art of designing intuitive user interfaces and delightful experiences for your apps and websites.
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
        <Text style={styles.startButtonText} onPress={() => navigation.navigate("NotesScreen")}>Start Learning</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  banner: { width: "100%", height: 200, borderRadius: 10 },
  title: { fontSize: 26, fontWeight: "bold", marginTop: 15, color: "#2F2F9F" },
  instructor: { fontSize: 16, color: "#444", marginVertical: 5 },
  description: { fontSize: 16, marginTop: 10, color: "#333" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginTop: 25, color: "#2F2F9F" },
  moduleCard: { backgroundColor: "#f0f0f0", borderRadius: 10, padding: 15, marginVertical: 8 },
  moduleText: { fontSize: 16, fontWeight: "600" },
  moduleDuration: { color: "gray", marginTop: 5 },
  resourceContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 15 },
  resourceButton: {
    backgroundColor: "#E0E7FF", padding: 15, borderRadius: 10,
    flex: 1, alignItems: "center", marginHorizontal: 5
  },
  resourceText: { fontWeight: "bold", color: "#2F2F9F" },
  startButton: {
    backgroundColor: "#2F2F9F", paddingVertical: 15,
    borderRadius: 50, alignItems: "center", marginTop: 30
  },
  startButtonText: { color: "white", fontWeight: "bold", fontSize: 18 },
});

export default UI;
