import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import NfcManager from 'react-native-nfc-manager';

const CancelButton = () => {
  async function cancelNfcRequest() {
    NfcManager.cancelTechnologyRequest();
  }
  
  return(
    <TouchableOpacity 
      style={styles.button} 
      onPress={cancelNfcRequest}
      activeOpacity={0.7}
    >
        <Text style={styles.buttonText}>Cancel NFC Request</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#ff6347',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
      alignItems: 'center',
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default CancelButton;
