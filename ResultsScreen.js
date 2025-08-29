import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import quizData from "./quizdata"; // Make sure quizData is imported correctly

const ResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { score, total, answers, quizId } = route.params;

  // Function to get the correct answer from the quiz data
  const getCorrectAnswer = (questionText) => {
    // Ensure quizData[quizId] exists and is an array
    const quizQuestions = quizData[quizId];
    if (quizQuestions) {
      const question = quizQuestions.find((q) => q.question === questionText);
      return question?.correctAnswer || "Unknown";
    }
    return "Unknown";
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.answerContainer}>
      <Text style={styles.question}>
        Q{index + 1}: {item.question}
      </Text>
      <Text
        style={[styles.answer, item.isCorrect ? styles.correct : styles.incorrect]}
      >
        Your Answer: {item.selected}
      </Text>
      {!item.isCorrect && (
        <Text style={styles.correctAnswer}>Correct: {getCorrectAnswer(item.question)}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz Results</Text>
      <Text style={styles.score}>
        Score: {score} / {total}
      </Text>

      <FlatList
        data={answers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />

      <Button title="Back to Home" onPress={() => navigation.navigate("home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 10,
  },
  score: {
    fontSize: 20,
    color: "#34495E",
    marginBottom: 20,
  },
  answerContainer: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F2F3F4",
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
  },
  answer: {
    fontSize: 16,
    marginTop: 4,
  },
  correct: {
    color: "green",
  },
  incorrect: {
    color: "red",
  },
  correctAnswer: {
    color: "#2980B9",
    marginTop: 2,
  },
});

export default ResultsScreen;
