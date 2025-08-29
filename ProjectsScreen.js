import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Projects will appear here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "500" },
});

export default ProjectsScreen;
