import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SavedCoursesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your saved courses will be listed here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "500" },
});

export default SavedCoursesScreen;
