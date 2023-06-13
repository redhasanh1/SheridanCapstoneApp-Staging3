import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';



const WriteButton = () => {
    async function writeNdef({type, value}) {
        let result = false;
      
        try {
          // STEP 1
          await NfcManager.requestTechnology(NfcTech.Ndef);
      
          const bytes = Ndef.encodeMessage([Ndef.textRecord('Hello NFC')]);
      
          if (bytes) {
            await NfcManager.ndefHandler // STEP 2
              .writeNdefMessage(bytes); // STEP 3
            result = true;
          }
        } catch (ex) {
          console.warn(ex);
        } finally {
          // STEP 4
          NfcManager.cancelTechnologyRequest();
        }
      
        return result;
      }

      return (
        <TouchableOpacity onPress={writeNdef} style={styles.button}>
          <Text>Write To A Tag</Text>
        </TouchableOpacity>
    );

}

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

  export default WriteButton;