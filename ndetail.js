import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";

const notesData = {
  numericTypes: [
    {
      title: "int",
      description: "Whole numbers (e.g., 10, -5, 100) are integers and can be used for counting, indexing, etc.",
      example: "Example: `x = 5`",
    },
    {
      title: "float",
      description: "Floating point numbers (e.g., 3.14, -0.5) represent real numbers and are used for precise calculations.",
      example: "Example: `y = 3.14`",
    },
    {
      title: "complex",
      description: "Complex numbers contain a real and imaginary part (e.g., 2 + 3j). Commonly used in scientific computations.",
      example: "Example: `z = 3 + 4j`",
    },
  ],
  sequenceTypes: [
    {
      title: "list",
      description: "An ordered, mutable collection of items (e.g., [1, 2, 3]). Lists allow modifying, adding, and removing elements.",
      example: "Example: `my_list = [1, 2, 3]`",
    },
    {
      title: "tuple",
      description: "An ordered, immutable collection of items (e.g., (1, 2, 3)). Tuples cannot be changed after creation.",
      example: "Example: `my_tuple = (1, 2, 3)`",
    },
    {
      title: "range",
      description: "A sequence of numbers generated using the `range()` function, commonly used in loops.",
      example: "Example: `my_range = range(5)`",
    },
  ],
  textType: [
    {
      title: "str",
      description: "A sequence of characters (e.g., 'Hello'). Strings are immutable and support slicing, concatenation, and methods.",
      example: "Example: `greeting = 'Hello'`",
    },
  ],
  mappingTypes: [
    {
      title: "dict",
      description: "A collection of key-value pairs (e.g., {'key': 'value'}). Useful for associative arrays.",
      example: "Example: `my_dict = {'name': 'John', 'age': 30}`",
    },
  ],
  booleanType: [
    {
      title: "bool",
      description: "Represents Boolean values `True` and `False`, typically used in conditional statements.",
      example: "Example: `is_active = True`",
    },
  ],
  setTypes: [
    {
      title: "set",
      description: "An unordered collection of unique items (e.g., {1, 2, 3}). Sets support mathematical operations like union and intersection.",
      example: "Example: `my_set = {1, 2, 3}`",
    },
  ],
};

const NotesScreen = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    numericTypes: false,
    sequenceTypes: false,
    textType: false,
    mappingTypes: false,
    booleanType: false,
    setTypes: false,
  });

  const toggleExpand = (category) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={styles.headerTitle}>Python Data Types Notes</Text>

      <View style={styles.notesContainer}>
        {Object.keys(notesData).map((category, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => toggleExpand(category)}>
              <Text style={styles.categoryTitle}>
                {category.replace(/([A-Z])/g, " $1").toUpperCase()}:
              </Text>
            </TouchableOpacity>

            {expandedCategories[category] && (
              <View style={styles.noteDetails}>
                {notesData[category].map((note, idx) => (
                  <View key={idx} style={styles.noteCard}>
                    <Text style={styles.noteItem}>
                      • <Text style={styles.bold}>{note.title}</Text> → {note.description}
                    </Text>
                    <Text style={styles.exampleText}>Example: {note.example}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F9",
    padding: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2F2F9F",
    textAlign: "center",
    marginBottom: 25,
    marginTop: 70,
  },
  notesContainer: {
    marginTop: 15,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2F2F9F",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  noteDetails: {
    marginTop: 10,
    paddingLeft: 20,
  },
  noteCard: {
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  noteItem: {
    fontSize: 16,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
  },
  exampleText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});

export default NotesScreen;
