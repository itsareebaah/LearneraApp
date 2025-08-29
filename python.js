import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.backgroundImage}>
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={{ paddingBottom: 20 }} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>

          {/* Course Title & Description */}
          <Text style={styles.title}>Complete Python Course</Text>
          <Text style={styles.description}>
            Master Python from scratch to advanced concepts with practical projects and real-world applications.
          </Text>
          <Image source={require("./phy.jpg")} style={styles.videoThumbnail} />
            <View style={styles.tabContainer}>
                      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate("NotesScreen")}><Text style={styles.tabText}>Notes</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate("QuizScreen")} ><Text style={styles.tabText}>Quiz</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate("Review")}><Text style={styles.tabText}>Reviews</Text></TouchableOpacity>
                    </View>

          {/* What You'll Learn Section */}
          <View style={styles.learnContainer}>
            <Text style={styles.learnTitle}>What You’ll Learn</Text>
            
            <View style={styles.learnItem}>
              <Image source={require("./bs.jpg")} style={styles.learnIcon} />
              <Text style={styles.learnText}>Python Basics & Advanced Concepts</Text>
            </View>
            
            <View style={styles.learnItem}>
              <Image source={require("./as.jpg")} style={styles.learnIcon} />
              <Text style={styles.learnText}>Build Real-World Applications</Text>
            </View>

            <View style={styles.learnItem}>
              <Image source={require("./sn.jpg")} style={styles.learnIcon} />
              <Text style={styles.learnText}>Guidance from Industry Experts</Text>
            </View>

            <View style={styles.learnItem}>
              <Image source={require("./cert.jpg")} style={styles.learnIcon} />
              <Text style={styles.learnText}>Certificate of Completion</Text>
            </View>
          </View>

          {/* CTA Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.enrollButton} onPress={() => navigation.navigate("NotesScreen")}>
              <Text style={styles.buttonText}>Start Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quizButton} onPress={() => navigation.navigate("QuizScreen")}>
              <Text style={styles.buttonText}>Take a Quiz</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor:"#F0F3F9",
  },
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 15,
   
    borderRadius: 0,
    margin: 0,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,

  },
  tabButton: {
    backgroundColor: "#2F2F9F",
    padding: 15,
    borderRadius: 25,
    width: 110,
  },
  tabText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign:'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
    marginTop: 80,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: "black",
    marginTop: 5,
    textAlign: 'center',
  },
  videoThumbnail: {
    marginTop: 20,
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },

  // What You'll Learn Section
  learnContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  learnTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  learnItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  learnIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  learnText: {
    fontSize: 16,
    color: "black",
  },

  // Buttons
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  enrollButton: {
    backgroundColor: "#2F2F9F",
    paddingVertical: 12,
    width: "48%",
    borderRadius: 25,
    alignItems: "center",
  },
  quizButton: {
    backgroundColor: "#2F2F9F",
    paddingVertical: 12,
    width: "48%",
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Screen;
