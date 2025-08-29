import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { database } from "./firebase"; // Ensure path to your Firebase config
import { collection, query, where, getDocs } from "firebase/firestore";
import { ProgressBar } from 'react-native-paper'; // Importing ProgressBar from React Native Paper for styling

const ProgressScreen = () => {
  const [quizResults, setQuizResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizResults = async () => {
      try {
        const q = query(collection(database, "quizResults"));
        const querySnapshot = await getDocs(q);

        const results = [];
        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });

        setQuizResults(results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz results: ", error);
        setLoading(false);
      }
    };

    fetchQuizResults();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2F2F9F" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>

      {quizResults.length === 0 ? (
        <Text style={styles.noResultsText}>No quiz results available.</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.resultsContainer}>
          {quizResults.map((result) => {
            const progress = (result.score / result.total) * 100; // Calculate progress as a percentage

            return (
              <View key={result.id} style={styles.resultCard}>
                <Text style={styles.resultTitle}>Quiz: {result.quizId}</Text>

                {/* Progress Bar */}
                <ProgressBar progress={progress / 100} color="#6200ee" style={styles.progressBar} />

                <Text style={styles.resultText}>
                  Score: {result.score}/{result.total}
                </Text>
                <Text style={styles.resultText}>
                  Completed on: {new Date(result.timestamp).toLocaleString()}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F4F9",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F9",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2F2F9F",
    textAlign: "center",
    marginVertical: 30,
  },
  noResultsText: {
    fontSize: 16,
    color: "#7D7D7D",
    textAlign: "center",
    marginTop: 20,
  },
  resultsContainer: {
    paddingBottom: 20,
  },
  resultCard: {
    backgroundColor: "#FFF",
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    paddingBottom: 15,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 14,
    color: "#7D7D7D",
    marginBottom: 5,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginVertical: 10,
  },
});

export default ProgressScreen;
