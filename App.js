import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';
import { Auth, Amplify } from 'aws-amplify';
import config from "./src/aws-exports";
import Home from './Home'; // Make sure to use the correct path to your Home component

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const theme = {
  colors: {
    primary: '#800080',
  },
};

const MyCustomSignIn = ({ setIsSignedIn }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      console.log('Successful sign in: ', user);
      setIsSignedIn(true); // Update sign-in state on successful sign in
    } catch (error) {
      console.log('Error signing in: ', error);
    }
  };

  return (
    <View style={styles.signInContainer}>
      <Image source={require('./assets/nfc.png')} style={styles.logo} />
      <Text style={styles.signInText}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  return (
    <View style={styles.container}>
      {isSignedIn ? <Home /> : <MyCustomSignIn setIsSignedIn={setIsSignedIn} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  signInText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default App;
