import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { db } from "./config"; // Firebase config file
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const Review = () => {
  const [inputReview, setInputReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // For editing

  const fetchReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    const temp = [];
    querySnapshot.forEach((doc) => {
      temp.push({ id: doc.id, text: doc.data().text });
    });
    setReviews(temp);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleAddReview = async () => {
    if (inputReview.trim()) {
      await addDoc(collection(db, "reviews"), {
        text: inputReview.trim(),
      });
      setInputReview("");
      fetchReviews();
    }
  };

  const handleUpdateReview = async () => {
    if (selectedId && inputReview.trim()) {
      await updateDoc(doc(db, "reviews", selectedId), {
        text: inputReview.trim(),
      });
      setInputReview("");
      setSelectedId(null);
      fetchReviews();
    }
  };

  const handleDeleteReview = async (id) => {
    await deleteDoc(doc(db, "reviews", id));
    fetchReviews();
  };

  const startEdit = (item) => {
    setInputReview(item.text);
    setSelectedId(item.id);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <Image source={require("./phy.jpg")} style={styles.videoThumbnail} />
      <Text style={styles.title}>Complete Python Course</Text>
      <Text style={styles.description}>
        Here you will learn basics to advanced Python language. Detailed video tutorials for every concept.
      </Text>
     {/* Rating Section */}
     <View style={styles.ratingContainer}>
        <Text style={styles.ratingScore}>4.5</Text>
        <View style={styles.stars}>
          {Array(5).fill().map((_, index) => (
            <Text key={index} style={styles.star}>⭐</Text>
          ))}
        </View>
        <Text style={styles.outOf}>out of 5</Text>
      </View>

      {/* Progress Bars */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "80%" }]} />
        </View>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "60%" }]} />
        </View>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "40%" }]} />
        </View>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "20%" }]} />
        </View>
     </View>
      <View style={styles.reviewInputSection}>
        <TextInput
          style={styles.reviewInput}
          placeholder="Write a review..."
          value={inputReview}
          onChangeText={setInputReview}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={selectedId ? handleUpdateReview : handleAddReview}
        >
          <Text style={styles.addButtonText}>{selectedId ? "Update" : "Add"}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.reviewHeading}>User Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <Text style={styles.reviewText}>{item.text}</Text>
            <View style={styles.reviewActions}>
              <TouchableOpacity onPress={() => startEdit(item)}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteReview(item.id)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 25,
    paddingTop: 20,
  },
  videoThumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 25,
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2F2F9F",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    marginVertical: 15,
  },
  reviewInputSection: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
  },
  reviewInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#2F2F9F",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    backgroundColor: "#FFF",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  ratingScore: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  stars: {
    flexDirection: "row",
    marginHorizontal: 15,
  },
  star: {
    fontSize: 22,
    color: "#FFD700", // Gold stars for ratings
  },
  outOf: {
    fontSize: 16,
    color: "#666",
  },
  progressContainer: {
    marginVertical: 10,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: "#E0E0E0", // Light grey background for progress bars
    borderRadius: 5,
    marginVertical: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#2F2F9F", // Blue color for the progress bar fill
  },
  addButton: {
    backgroundColor: "#2F2F9F",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  reviewHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#2F2F9F",
  },
  reviewItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  reviewText: {
    fontSize: 15,
    color: "#333",
  },
  reviewActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  editText: {
    color: "#2F2F9F",
    marginRight: 15,
    fontWeight: "bold",
  },
  deleteText: {
    color: "#D11A2A",
    fontWeight: "bold",
  },
});

export default Review;
