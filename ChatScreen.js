import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, FlatList,
  TouchableOpacity, Image, ImageBackground,
  KeyboardAvoidingView, Platform, SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth, database } from './firebase';
import {
  collection, addDoc, onSnapshot,
  orderBy, query, serverTimestamp, doc, setDoc, updateDoc, getDocs
} from 'firebase/firestore';

const contactImages = {
  Rabya: require('./p3.jpg'),
  Jane: require('./p2.jpg'),
  John: require('./p4.jpeg'),
  Bilal: require('./p5.jpeg'),
};

const ChatScreen = ({ route }) => {
  const { contactName } = route.params;
  const contactImage = contactImages[contactName] || require('./p2.jpg');

  const currentUser = auth.currentUser?.email;
  const chatId = [currentUser, contactName].sort().join('_');

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [replyMessage, setReplyMessage] = useState(null);

  useEffect(() => {
    const msgRef = collection(database, 'chats', chatId, 'messages');
    const q = query(msgRef, orderBy('createdAt'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loaded = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(loaded);
    });

    return () => unsubscribe();
  }, [chatId]);

  useEffect(() => {
    const typingRef = doc(database, 'chats', chatId, 'typingStatus', contactName);
    const unsubscribe = onSnapshot(typingRef, (docSnap) => {
      setIsTyping(docSnap.exists() && docSnap.data().isTyping);
    });

    return () => unsubscribe();
  }, [chatId, contactName]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const msgRef = collection(database, 'chats', chatId, 'messages');
    await addDoc(msgRef, {
      text: message,
      sender: currentUser,
      createdAt: serverTimestamp(),
      seen: false,
      replyTo: replyMessage
        ? {
            text: replyMessage.text,
            sender: replyMessage.sender,
          }
        : null,
    });

    setMessage('');
    setReplyMessage(null);
    updateTypingStatus(false);
  };

  const updateTypingStatus = (typing) => {
    const typingRef = doc(database, 'chats', chatId, 'typingStatus', currentUser);
    setDoc(typingRef, { isTyping: typing });
  };

  const handleTyping = (text) => {
    setMessage(text);

    if (text.length > 0) {
      if (typingTimeout) clearTimeout(typingTimeout);
      updateTypingStatus(true);

      setTypingTimeout(setTimeout(() => {
        updateTypingStatus(false);
      }, 3000));
    } else {
      updateTypingStatus(false);
    }
  };

  const markMessagesAsSeen = async () => {
    const msgRef = collection(database, 'chats', chatId, 'messages');
    const msgQuery = query(msgRef);
    const snapshot = await getDocs(msgQuery);

    snapshot.forEach(async (msgDoc) => {
      if (msgDoc.data().sender !== currentUser && !msgDoc.data().seen) {
        const messageRef = doc(database, 'chats', chatId, 'messages', msgDoc.id);
        await updateDoc(messageRef, { seen: true });
      }
    });
  };

  useEffect(() => {
    if (currentUser) {
      markMessagesAsSeen();
    }
  }, [currentUser]);

const renderItem = ({ item }) => {
  const messageTime = item.createdAt?.toDate?.().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <TouchableOpacity onLongPress={() => setReplyMessage(item)}>
      <View
        style={[
          styles.messageContainer,
          item.sender === currentUser ? styles.youMessage : styles.otherMessage,
        ]}
      >
        {item.replyTo && (
          <View style={styles.replyContainer}>
            <Text style={styles.replySender}>{item.replyTo.sender}</Text>
            <Text style={styles.replyText}>{item.replyTo.text}</Text>
          </View>
        )}
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.timeText}>{messageTime}</Text>
        {item.sender === currentUser && item.seen && (
          <Text style={styles.seenText}>Seen</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./chat.jpg')} style={styles.background}>
        <View style={styles.header}>
          <Image source={contactImage} style={styles.profileImage} />
          <Text style={styles.headerText}>{contactName}</Text>
        </View>

        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={90}
        >
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messagesContainer}
          />

          {isTyping && (
            <Text style={styles.typingText}>{contactName} is typing...</Text>
          )}

          {replyMessage && (
            <View style={styles.replyPreview}>
              <View style={{ flex: 1 }}>
                <Text style={styles.replySender}>{replyMessage.sender}</Text>
                <Text style={styles.replyText}>{replyMessage.text}</Text>
              </View>
              <TouchableOpacity onPress={() => setReplyMessage(null)}>
                <Ionicons name="close" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={handleTyping}
              placeholder="Type a message"
              placeholderTextColor="#666"
            />
            <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
              <Ionicons name="send" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  flex: { flex: 1 },
  background: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  profileImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  headerText: { fontSize: 18, fontWeight: '600', color: '#333' },
  messagesContainer: { paddingHorizontal: 10, paddingBottom: 10 },
  messageContainer: {
    padding: 10,
    marginVertical: 6,
    maxWidth: '75%',
    borderRadius: 18,
  },
  youMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    borderTopRightRadius: 0,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffffaa',
    borderTopLeftRadius: 0,
  },
  text: { fontSize: 16, color: '#333' },
  typingText: {
    marginLeft: 16,
    marginBottom: 5,
    color: '#555',
    fontStyle: 'italic',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#6200EE',
    borderRadius: 20,
    padding: 10,
  },
  seenText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    textAlign: 'right',
  },
  replyContainer: {
    padding: 5,
    backgroundColor: '#f1f1f1',
    borderLeftWidth: 3,
    borderLeftColor: '#6200EE',
    marginBottom: 5,
  },
  replySender: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#444',
  },
  replyText: {
    fontSize: 12,
    color: '#555',
  },
  replyPreview: {
    backgroundColor: '#eee',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
  },
  timeText: {
    fontSize: 11,
    color: '#777',
    marginTop: 3,
    textAlign: 'right',
  },
  
});

export default ChatScreen;
