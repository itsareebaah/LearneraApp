import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: "1", name: "Design", icon: "pencil-alt", color: "#FFD760", screen: "Python" },
    { id: "2", name: "Code", icon: "code", color: "#00C0F0", screen: "Python" },
    { id: "3", name: "Website", icon: "globe", color: "#6A5ACD", screen: "Python" },
    { id: "4", name: "Games", icon: "gamepad", color: "#DC143C", screen: "Python" },
  ];

  const trendingCourses = [
    { id: "1", title: "UX/UI Design", image: require("./ux.jpg"), screen: "Python" },
    { id: "2", title: "Website Development", image: require("./webs.jpg"), screen: "Python" },
    { id: "3", title: "Python Coding", image: require("./lang.jpg"), screen: "Python" },
  ];

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.screen)}
    >
      <FontAwesome5 name={item.icon} size={18} color="#fff" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate(item.screen)}>
      <Image source={item.image} style={styles.courseImage} />
      <Text style={styles.courseTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
      <View style={styles.container}>
    
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={require("./profile.jpg")} style={styles.avatar} />
          <View>
          <Text style={styles.welcomeText}>Hi Learner 👋</Text>
<Text style={styles.tagline}>“Let’s grow together 🌱”</Text>

          </View>
        </View>

        <TextInput style={styles.searchInput} placeholder="🔍 Search courses..." />


        <View style={styles.banner}>
  <View style={{ flex: 1 }}>
    <Text style={styles.bannerText}>What do you want to learn today? 📚</Text>
    <TouchableOpacity style={styles.exploreBtn} onPress={() => navigation.navigate('CourseScreen')}>
      <Text style={styles.exploreText}>🚀 Explore  </Text>
    </TouchableOpacity>
  </View>
  <Image source={require("./pic1.png")} style={styles.bannerImage} />
</View>


        <Text style={styles.sectionTitle}>🌟 Featured Course </Text>
        <View style={styles.featuredCard}>
          <Image source={require("./lang.jpg")} style={styles.featuredImage} />
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.featuredTitle}>Master Python Programming</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Python')}>
              <Text style={styles.learnMore}>Learn More →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>📂 Categories</Text>
        <FlatList
          data={categories}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          scrollEnabled={false}
        />

        <Text style={styles.sectionTitle}>🔥 Trending Courses </Text>
        <FlatList
          data={trendingCourses}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={renderCourseItem}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionTitle}>🧰 Learning Tools</Text>
<View style={styles.toolsContainer}>
  <TouchableOpacity style={styles.toolCard} onPress={() => navigation.navigate('NotesScreen')}>
    <FontAwesome5 name="sticky-note" size={20} color="#4A90E2" />
    <Text style={styles.toolText} >Notes</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.toolCard}onPress={() => navigation.navigate('QuizScreen')}>
    <FontAwesome5 name="question-circle" size={20} color="#50C878" />
    <Text style={styles.toolText}>Quizzes</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.toolCard} onPress={() => navigation.navigate('ContactsScreen')}>
    <FontAwesome5 name="comments" size={20} color="#FF7F50" />
    <Text style={styles.toolText}>Chat</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.toolCard} onPress={() => navigation.navigate('ProgressScreen')}>
    <FontAwesome5 name="chart-line" size={20} color="#FFA500" />
    <Text style={styles.toolText}>Progress</Text>
  </TouchableOpacity>
</View>

      </ScrollView>
   </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor:"#F0F3F9", // Clean light gray-blue tone
  },

  toolsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 20,
  },
  toolCard: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  toolText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  
  
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  tagline: {
    fontSize: 13,
    color: "#888",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 45,
    marginBottom: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  banner: {
    backgroundColor: "#F8F9FB",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    maxWidth: "75%",
  },
  banner: {
    backgroundColor: "#F8F9FB",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  
  bannerImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 80,
  },
  exploreBtn: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 15,
    alignSelf: "flex-start",
  },
  exploreText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginVertical: 12,
  },
  featuredCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  featuredImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  featuredTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: "#222",
  },
  learnMore: {
    color: "#4A90E2",
    marginTop: 4,
    fontSize: 14,
  },
  categoryCard: {
    flex: 0.48,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginBottom: 15,
    borderRadius: 15,
  },
  categoryText: {
    color: "#fff",
    fontWeight: "600",
    marginTop: 5,
    fontSize: 14,
  },
  courseCard: {
    width: width * 0.6,
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  courseImage: {
    width: "100%",
    height: 120,
  },
  courseTitle: {
    fontWeight: "600",
    fontSize: 14,
    padding: 10,
    color: "#333",
  },
});

export default HomeScreen;
