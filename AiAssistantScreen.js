import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { OPENAI_API_KEY } from "@env";

const AiAssistantScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: updatedMessages,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const aiMessage = data.choices[0].message;
      setMessages([...updatedMessages, aiMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages([...updatedMessages, { role: "assistant", content: "Sorry, I couldn’t respond. Try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={styles.chatContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.message,
              msg.role === "user" ? styles.userMessage : styles.aiMessage,
            ]}
          >
            <Text style={styles.messageText}>{msg.content}</Text>
          </View>
        ))}
        {loading && <ActivityIndicator size="small" color="#4A90E2" />}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Ask me anything..."
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AiAssistantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingTop: 50,
  },
  chatContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  message: {
    padding: 10,
    marginVertical: 6,
    borderRadius: 10,
    maxWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  aiMessage: {
    backgroundColor: "#E6E6E6",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 15,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    padding: 12,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    fontSize: 15,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: "#4A90E2",
    marginLeft: 8,
    padding: 12,
    borderRadius: 50,
  },
  sendText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
