import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const HelpScreen = ({ navigation }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const helpTopics = [
    { icon: 'book-outline', title: 'Course Issues', desc: 'Trouble with lessons or content' },
    { icon: 'person-outline', title: 'Account Help', desc: 'Password, profile, or settings' },
    { icon: 'wallet-outline', title: 'Payments & Billing', desc: 'Subscriptions and receipts' },
    { icon: 'bug-outline', title: 'Report a Bug', desc: 'Something not working right?' },
    { icon: 'help-circle-outline', title: 'Other Questions', desc: 'Anything else we can help with' },
  ];

  const handleContactSupport = () => {
    Linking.openURL(
      'mailto:support@example.com?subject=App Help&body=Describe your issue here...'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Center</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>How can we assist you today?</Text>

        {helpTopics.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.topicCard}
            onPress={() => setExpandedIndex(index === expandedIndex ? null : index)}
          >
            <Ionicons name={item.icon} size={26} color="#6200EE" style={styles.topicIcon} />
            <View style={{ flex: 1 }}>
              <Text style={styles.topicTitle}>{item.title}</Text>
              <Text style={styles.topicDesc}>{item.desc}</Text>
              {expandedIndex === index && (
                <Text style={styles.topicDetail}>
                  {`Here's how to resolve "${item.title.toLowerCase()}".\n\n➡️ Step 1: Check your internet or try restarting the app.\n➡️ Step 2: Visit the FAQ section if available.\n➡️ Step 3: If the issue continues, tap 'Contact Support' below.`}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        ))}

        {/* Contact Box */}
        <View style={styles.contactBox}>
          <Text style={styles.contactText}>Still need help?</Text>
          <TouchableOpacity style={styles.contactButton} onPress={handleContactSupport}>
            <MaterialIcons name="email" size={20} color="#fff" />
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
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
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  topicIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  topicDesc: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  topicDetail: {
    marginTop: 10,
    color: '#444',
    fontSize: 13,
    lineHeight: 20,
    backgroundColor: '#F3F4F6',
    padding: 10,
    borderRadius: 8,
  },
  contactBox: {
    marginTop: 30,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  contactButton: {
    flexDirection: 'row',
    backgroundColor: '#6200EE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default HelpScreen;
