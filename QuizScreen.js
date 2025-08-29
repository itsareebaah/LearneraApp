import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const QuizScreen = () => {
  const navigation = useNavigation();

  // Quiz Topics for Navigation
  const quizTopics = [
    { title: "Introduction", id: "intro" },
    { title: "Data Types", id: "dataTypes" },
    { title: "Operators", id: "operators" },
    { title: "Functions", id: "functions" },
    { title: "Strings", id: "strings" },
    { title: "Loops", id: "loops" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz</Text>

      <ScrollView contentContainerStyle={styles.notesContainer}>
        {/* Loop through quiz topics */}
        {quizTopics.map((topic) => (
          <TouchableOpacity
            key={topic.id}
            style={styles.noteCard}
            onPress={() =>
              navigation.navigate("QuizDetailScreen", { quizId: topic.id })
            }
          >
            <Image source={require("./quiz.jpg")} style={styles.icon} />
            <View style={styles.noteTextContainer}>
              <Text style={styles.noteTitle}>{topic.title}</Text>
              <Text style={styles.noteSubtitle}>Start Quiz</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F9",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2F2F9F",
    textAlign: "center",
    marginTop: 70,
    marginBottom: 20,
  },
  notesContainer: {
    paddingBottom: 20,
  },
  noteCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#D1D1D1",
  },
  noteTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  noteSubtitle: {
    fontSize: 14,
    color: "#7D7D7D",
  },
});

export default QuizScreen;
