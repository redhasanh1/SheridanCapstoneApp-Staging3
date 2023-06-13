import React from 'react';  
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';  
import { Auth } from 'aws-amplify';  
import ReadButton from "./ReadButton"  
import WriteButton from './WriteButton';  
import CancelButton from './CancelButton';  

const Home = () => {  
  const signOut = async () => {  
    try {  
      await Auth.signOut({ global: true });  
    } catch (error) {  
      console.log('error signing out: ', error);  
    }  
  };  

  return (  
    <SafeAreaView style={styles.container}>  
      <Text style={styles.title}>My Test App</Text>
      <View style={styles.header}>  
        <Text style={styles.headerText}>Welcome to the new UI!</Text>  
        <Pressable style={styles.button} onPress={() => signOut()}>  
          <Text style={styles.buttonText}>Sign out</Text>  
        </Pressable>  
      </View>  
      <ReadButton></ReadButton>  
      <WriteButton></WriteButton>  
      <CancelButton></CancelButton>  
    </SafeAreaView>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    backgroundColor: '#ddd',  
    alignItems: 'center',  
    justifyContent: 'center',  
    paddingVertical: 20,  
  },  
  title: {  
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  header: {  
    display: 'flex',  
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    padding: 20,  
    alignItems: 'center',  
  },  
  headerText: {  
    fontSize: 28,  
    fontWeight: 'bold',  
  },  
  button: {  
    backgroundColor: '#007BFF',  
    padding: 10,  
    borderRadius: 6,  
  },  
  buttonText: {  
    color: '#fff',  
    fontSize: 18,  
  },  
});

export default Home;
