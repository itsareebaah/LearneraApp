// GoogleLogin.js
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '490435263398-9jn35kgkrflmroed7ma9ueiqufjtf6hp.apps.googleusercontent.com',
    iosClientId: '490435263398-0oj6bncnmkljbt2pg1mpb9riopakhlrp.apps.googleusercontent.com',
  
    webClientId: '490435263398-b6g4tt8r24upeubuc9rf5eb8c8527ov1.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(userCred => {
          console.log('User:', userCred.user.displayName);
        })
        .catch(err => console.log('Firebase sign-in error', err));
    }
  }, [response]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Logged in user:', user.email);
      } else {
        console.log('No user logged in');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Login with Google" disabled={!request} onPress={() => promptAsync()} />
    </View>
  );
}
