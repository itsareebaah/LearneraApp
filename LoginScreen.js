import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Make sure the path is correct

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Success", "Logged in successfully!");
        navigation.replace("home"); // Navigate to home screen
      })
      .catch((error) => {
        Alert.alert("Login Failed", error.message);
      });
  };

  return (
    <ImageBackground source={require("./bac.avif")} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>LOGIN</Text>
          <Text style={styles.subtitle}>Welcome back! Good to see you again 👋</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={() => navigation.replace("ForgetScreen")}>
            <Text style={styles.forgotPassword}>Forget Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          {/* <Text style={styles.orText}>OR Sign in with</Text> */}

          {/* <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText} onPress={() => navigation.navigate("Google")}>Login with Google</Text>
          </TouchableOpacity> */}

          <Text style={styles.bottomText}>
            Don't have an account?{" "}
            <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
              Sign Up
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#00BFFF",
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  orText: {
    textAlign: "center",
    color: "#ccc",
    fontSize: 14,
    marginVertical: 15,
  },
  googleButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  bottomText: {
    textAlign: "center",
    marginTop: 30,
    color: "#ccc",
  },
  link: {
    color: "#00BFFF",
    fontWeight: "bold",
  },
});
