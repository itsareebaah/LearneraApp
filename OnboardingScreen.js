import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const onboardingData = [
  {
    id: 1,
    title: "Welcome to Learnera Hub",
    subtitle: "Learn Online with Us",
    image: require("./fo.jpg"), // Individual image for each step
  },
  {
    id: 2,
    title: "Learn new skills everyday!",
    subtitle: "We provide the best learning courses and mentors for you",
    image: require("./th.jpg"),
  },
  {
    id: 3,
    title: "Easy enroll in class!",
    subtitle: "Join the best courses available",
    image: require("./fi.jpg"),
  },
  {
    id: 4,
    title: "Explore new resources!",
    subtitle: "Find learning materials and mentors",
    image: require("./si.jpg"),
  },
];

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace("SignUp");
    }
  };

  const handleSkip = () => {
    navigation.replace("SignUp"); // Directly navigate to the home screen
  };

  return (
    <ImageBackground
      source={require("./ele.jpg")} // This is the common background image
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      {/* Skip Button */}
      <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Onboarding Content */}
      <Image source={onboardingData[currentIndex].image} style={styles.onboardingImage} />
      <Text style={styles.title}>{onboardingData[currentIndex].title}</Text>
      <Text style={styles.subtitle}>{onboardingData[currentIndex].subtitle}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextText}>
            {currentIndex === onboardingData.length - 1 ? "Start" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Ensure the background image shows
    padding: 20,
  },
  backgroundImage: {
    resizeMode: "cover", // Ensure the background image covers the screen
    flex: 1, // Make sure the background takes up all space
  },
  onboardingImage: {
    width: 300,
    height: 300,
    marginBottom: 80,
    borderRadius: 150,
    zIndex: 1, // Ensures the image is on top of the background
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // White text to stand out over the background
    textAlign: "center",
    marginBottom: 10,
    zIndex: 1,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: "#fff", // White text to stand out over the background
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    zIndex: 1,
    color: 'black',
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
    zIndex: 1,
  },
  nextButton: {
    backgroundColor: "#0c0b5f",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 40,
    width: 150,
    height: 60,
  },
  nextText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
  },
  skipButton: {
    position: "absolute",
    top: 60,      // Position the button at the top
    right: 40,    // Right edge of the screen
    zIndex: 10,   // Ensure it appears on top of everything
    backgroundColor:"#0c0b5f",
    width:80,
    height:30,
    borderRadius:40,
  },
  skipText: {
    fontSize: 18,
    textAlign:'center',
    fontWeight: "bold",
    color: "#fff", // White color for the Skip button text
  },
});

export default OnboardingScreen;
