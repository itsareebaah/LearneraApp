import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const contacts = [
  { id: '1', name: 'Rabya', image: require('./p3.jpg') }, // Add your image in the assets folder
  { id: '2', name: 'Jane', image: require('./p2.jpg') },
  { id: '3', name: 'John', image: require('./p4.jpeg') },
  { id: '4', name: 'Bilal', image: require('./p5.jpeg') },
];

const ContactsScreen = ({ navigation }) => {
  const handleContactPress = (contactName) => {
    // Navigate to ChatScreen and pass the contact name
    navigation.navigate('ChatScreen', { contactName });
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./bac.jpg')} // Add a nice background image in the assets folder
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.title}>Contacts</Text>
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={() => handleContactPress(item.name)} 
              style={styles.contact}
            >
              <Image source={item.image} style={styles.profileImage} />
              <Text style={styles.contactName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 12,
    backgroundColor: '#ffffff90', // Slight transparency
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow effect
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

export default ContactsScreen;

