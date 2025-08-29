import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const courses = [
  { id: "1", title: "UI/UX Masterclass", duration: "3 Hrs", image: require("./ux.jpg"), instructor: "Rabya Khan"},
  { id: "2", title: "Complete Phython Course", duration: "2 Hrs", image: require("./phy.jpg"), instructor: "Bilal Hasan" },
  { id: "3", title: "Software Development", duration: "3 Hrs", image: require("./fi.jpg"), instructor: "John Doe" },
  { id: "4", title: "Game Development", duration: "5 Hrs", image: require("./game.jpg"), instructor: "Jane Smith" },
];

const CourseList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.trendingTitle}>Trending Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("CourseDetails", { course: item })}
          >
            <Image source={item.image} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseDuration}>⏳ {item.duration}</Text>
            <Text style={styles.instructor}>👤 {item.instructor}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  card: {
    
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 8,
    width: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    backgroundColor: "rgb(229, 233, 236)",
   
  },
  courseImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
  courseDuration: {
    fontSize: 14,
    color: "gray",
  },
  instructor: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  trendingTitle: {
    marginBottom:10,
    marginTop:50,
    fontSize: 30,
    fontWeight: "bold",
    textAlign:'center',
    color:'black',
  },
});

export default CourseList;
