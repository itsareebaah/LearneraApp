import React from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SendResetCodeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require("./bac.avif")} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.card}>
              <Text style={styles.title}>Verify Code</Text>
              <Text style={styles.subtitle}>
                Please enter the 6-digit code we sent to your email.
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter verification code"
                placeholderTextColor="#999"
                keyboardType="numeric"
                maxLength={6}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace("home")} // Or wherever you want to go next
              >
                <Text style={styles.buttonText}>Verify</Text>
              </TouchableOpacity>

              <Text style={styles.bottomText}>
                Didn't receive the code?{" "}
                <Text style={styles.link} onPress={() => console.log("Resend code")}>
                  Resend
                </Text>
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
    textAlign: "center",
    letterSpacing: 6,
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
  bottomText: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
  },
  link: {
    color: "#1E90FF",
    fontWeight: "600",
  },
});
