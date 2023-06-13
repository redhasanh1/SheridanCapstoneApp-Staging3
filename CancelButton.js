import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager'




const CancelButton = () => {

  async function cancelNFcRequest() {
    NfcManager.cancelTechnologyRequest();
  }
  return(
    <TouchableOpacity style={styles.button} onPress={cancelNFcRequest}>
        <Text style={{ color: "white" }}>Cancel</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      // width: width,
      paddingVertical: 20,
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      // width: width,
      alignItems: 'center',
    },
    headerText: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#ff9900',
      padding: 10,
      borderRadius: 6,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
  });

export default CancelButton;


