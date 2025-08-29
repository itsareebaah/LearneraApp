import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NotesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Notes</Text>

      <ScrollView contentContainerStyle={styles.notesContainer}>
        {/* Note 1 */}
        <TouchableOpacity
          style={styles.noteCard}
          onPress={() => navigation.navigate("ndetail")}
        >
          <Image source={require("./n1.jpg")} style={styles.icon} />
          <View style={styles.noteTextContainer}>
            <Text style={styles.noteTitle}>Introduction</Text>
            <Text style={styles.noteSubtitle}>Start here!</Text>
          </View>
        </TouchableOpacity>

        {/* Note 2 */}
        <TouchableOpacity
          style={styles.noteCard}
          onPress={() => navigation.navigate("ndetail")}
        >
          <Image source={require("./n2.jpg")} style={styles.icon} />
          <View style={styles.noteTextContainer}>
            <Text style={styles.noteTitle}>Data Types</Text>
            <Text style={styles.noteSubtitle}>Important concepts</Text>
          </View>
        </TouchableOpacity>

        {/* Note 3 */}
        <TouchableOpacity
          style={styles.noteCard}
          onPress={() => navigation.navigate("ndetail")}
        >
          <Image source={require("./n3.jpg")} style={styles.icon} />
          <View style={styles.noteTextContainer}>
            <Text style={styles.noteTitle}>Operators</Text>
            <Text style={styles.noteSubtitle}>Learn operators in Python</Text>
          </View>
        </TouchableOpacity>

        {/* Note 4 */}
        <TouchableOpacity
          style={styles.noteCard}
          onPress={() => navigation.navigate("ndetail")}
        >
          <Image source={require("./n4.jpg")} style={styles.icon} />
          <View style={styles.noteTextContainer}>
            <Text style={styles.noteTitle}>Functions</Text>
            <Text style={styles.noteSubtitle}>Master Python functions</Text>
          </View>
        </TouchableOpacity>

        {/* Note 5 */}
        <TouchableOpacity
          style={styles.noteCard}
          onPress={() => navigation.navigate("ndetail")}
        >
          <Image source={require("./n5.jpg")} style={styles.icon} />
          <View style={styles.noteTextContainer}>
            <Text style={styles.noteTitle}>Strings</Text>
            <Text style={styles.noteSubtitle}>String manipulation</Text>
          </View>
        </TouchableOpacity>

        {/* Note 6 */}
        <TouchableOpacity
          style={styles.noteCard}
          onPress={() => navigation.navigate("ndetail")}
        >
          <Image source={require("./n6.jpg")} style={styles.icon} />
          <View style={styles.noteTextContainer}>
            <Text style={styles.noteTitle}>Loops</Text>
            <Text style={styles.noteSubtitle}>Master loops in Python</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F9", // Light background for a modern feel
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2F2F9F", // Bold title color
    textAlign: "center",
    
    marginTop: 70,
    marginBottom: 20,
    fontFamily: 'Roboto', // Use a clean and modern font
  },
  notesContainer: {
    paddingBottom: 20,
  },
  noteCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF", // White background for cards
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000", // Shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6, // For Android shadow
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#D1D1D1", // Subtle border for icons
  },
  noteTextContainer: {
    flex: 1,
    justifyContent: "center", // Align text properly
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "600", // Slightly lighter for a refined feel
    color: "#333",
    marginBottom: 5,
    fontFamily: 'Roboto', // Clean, modern font
  },
  noteSubtitle: {
    fontSize: 14,
    color: "#7D7D7D", // Lighter subtitle for clarity
    fontFamily: 'Roboto',
  },
});

export default NotesScreen;
