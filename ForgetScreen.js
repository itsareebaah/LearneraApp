import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase"; // adjust the path if needed
import { useNavigation } from "@react-navigation/native";

export default function ForgetScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    if (!email) {
      Alert.alert("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Email Sent", "Check your inbox to reset your password.");
      navigation.goBack(); // or navigate to login screen
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ImageBackground source={require("./bac.avif")} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.card}>
              <Text style={styles.title}>Forgot Password</Text>
              <Text style={styles.subtitle}>
                Enter your email below to receive a reset link.
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />

              <TouchableOpacity style={styles.button} onPress={handleReset}>
                <Text style={styles.buttonText}>Send Reset Link</Text>
              </TouchableOpacity>

              <Text style={styles.backText}>
                Remember your password?{" "}
                <Text style={styles.link} onPress={() => navigation.goBack()}>
                  Go back
                </Text>
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

// Keep your existing styles


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backText: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
  },
  link: {
    color: "#1E90FF",
    fontWeight: "600",
  },
});
