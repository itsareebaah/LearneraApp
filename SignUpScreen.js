import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ImageBackground, ScrollView, Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "./firebase"; // ✅ make sure the path is correct
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Success", "Account created successfully!");
        navigation.replace("home"); // Or wherever you want to go
      })
      .catch(error => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <ImageBackground source={require("./bac.avif")} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Create an Account</Text>

          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa"
            value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa"
            value={password} onChangeText={setPassword} secureTextEntry />

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.bottomText}>
            Already have an account?{" "}
            <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
              LOGIN
            </Text>
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent dark overlay
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.9)",
    //borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  termsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  text: {
    color: "#fff",
  },
  link: {
    color: "#00BFFF",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    //borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  bottomText: {
    textAlign: "center",
    marginTop: 25,
    color: "#ccc",
  },
});
