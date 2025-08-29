import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Flash = () => {
  const flashcards = [
    { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript that allows HTML-like code in JS." },
    { question: "What is a state in React?", answer: "A built-in object used to store data in a component." },
    { question: "What is a prop in React?", answer: "Props are inputs to components, passed down from parent components." },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState(0);

  const flipAnim = useRef(new Animated.Value(0)).current;

  let frontOpacity = flipAnim.interpolate({
    inputRange: [0, 90],
    outputRange: [1, 0],
  });

  let backOpacity = flipAnim.interpolate({
    inputRange: [90, 180],
    outputRange: [0, 1],
  });

  const flipCard = () => {
    Animated.timing(flipAnim, {
      toValue: flipped ? 0 : 180,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      setFlipped(!flipped);
    });
  };

const goToNextCard = () => {
  if (currentCard < flashcards.length - 1) {
    const nextCard = currentCard + 1;
    setCurrentCard(nextCard);
    setProgress(((nextCard + 1) / flashcards.length) * 100);
    resetFlip();
  }
};

const goToPreviousCard = () => {
  if (currentCard > 0) {
    const prevCard = currentCard - 1;
    setCurrentCard(prevCard);
    setProgress(((prevCard + 1) / flashcards.length) * 100);
    resetFlip();
  }
};

  const resetFlip = () => {
    setFlipped(false);
    Animated.timing(flipAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcards</Text>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Progress: {Math.round(progress)}%</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>

      {/* Flashcard */}
      <View style={styles.cardContainer}>
        <Animated.View style={[styles.card, { opacity: frontOpacity, zIndex: flipped ? 0 : 1 }]}>
          <Text style={styles.cardText}>{flashcards[currentCard].question}</Text>
        </Animated.View>

        <Animated.View style={[styles.card, styles.cardBack, { opacity: backOpacity, zIndex: flipped ? 1 : 0 }]}>
          <Text style={styles.cardText}>{flashcards[currentCard].answer}</Text>
        </Animated.View>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={goToPreviousCard} style={styles.controlButton}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={flipCard} style={styles.flipButton}>
          <Text style={styles.flipText}>Flip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToNextCard} style={styles.controlButton}>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3E3E3E",
  },
  progressContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: "#555",
  },
  progressBarBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 4,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#3E77FF",
  },
  cardContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    position: "relative",
  },
  card: {
    width: "90%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  cardBack: {
    backgroundColor: "#F3F3F3",
  },
  cardText: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
    padding: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  controlButton: {
    backgroundColor: "#3E77FF",
    padding: 12,
    borderRadius: 50,
    elevation: 4,
  },
  flipButton: {
    backgroundColor: "#FF9F00",
    padding: 12,
    borderRadius: 50,
    elevation: 4,
  },
  flipText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Flash;
