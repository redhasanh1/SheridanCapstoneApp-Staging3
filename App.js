import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import config from "./src/aws-exports";
import { withAuthenticator } from 'aws-amplify-react-native';
import Home from './Home';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react-native';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const theme = {
  tokens: {
    colors: {
      brand: {
        primary: {
          10: '#FF1493', // Pink color example
        },
      },
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);
