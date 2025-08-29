import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PrivacyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Your Privacy Matters</Text>

        <Text style={styles.text}>
          We value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our eLearning app.
        </Text>

        <Text style={styles.subTitle}>1. Information We Collect</Text>
        <Text style={styles.text}>
          • Name, email, and profile info when you sign up.{"\n"}
          • Course progress and preferences.{"\n"}
          • Usage data to improve your learning experience.
        </Text>

        <Text style={styles.subTitle}>2. How We Use Your Information</Text>
        <Text style={styles.text}>
          • To personalize course recommendations.{"\n"}
          • To track learning progress.{"\n"}
          • To communicate updates or support.
        </Text>

        <Text style={styles.subTitle}>3. Sharing of Information</Text>
        <Text style={styles.text}>
          We do not sell your data. We may share limited information with service providers to enhance your experience.
        </Text>

        <Text style={styles.subTitle}>4. Your Control</Text>
        <Text style={styles.text}>
          You can update or delete your account at any time. Contact us if you have privacy-related concerns.
        </Text>

        <Text style={styles.subTitle}>5. Updates</Text>
        <Text style={styles.text}>
          We may update this policy as needed. We’ll notify you of any major changes.
        </Text>

        <Text style={styles.footerText}>
          Last updated: April 6, 2025
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 4,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    color: '#333',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    color: '#444',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  footerText: {
    fontSize: 14,
    marginTop: 30,
    textAlign: 'center',
    color: '#888',
  },
});

export default PrivacyScreen;
