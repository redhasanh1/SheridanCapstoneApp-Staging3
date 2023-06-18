
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Platform, Image, Animated } from 'react-native';
import { Auth } from 'aws-amplify';
import ReadButton from "./ReadButton";
import WriteButton from './WriteButton';
import CancelButton from './CancelButton';
const Home = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  const content = (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./assets/cyber.png')} 
          style={styles.logo}
        />
        <Text style={styles.headerText}>Decentralized Lock</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <ReadButton />
        </View>
        <View style={styles.buttonRow}>
          <WriteButton />
        </View>
        <View style={styles.buttonRow}>
          <CancelButton />
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.button} onPress={() => signOut()}>
            <Text style={styles.buttonText}>Sign out</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
  if (Platform.OS === 'web') {
    return content;
  }
  return (
    <Animated.View style={{...styles.container, opacity: fadeAnim}}>
      {content}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  logo: {
    width: 100,
    height: 200,
    resizeMode: 'contain',
  },
  header: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF8080',
  },
  button: {
    backgroundColor: '#808080',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: 20,
    paddingTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
export default Home;
