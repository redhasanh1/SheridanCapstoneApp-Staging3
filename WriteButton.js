import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

const WriteButton = () => {
  async function writeNdef({type, value}) {
    let result = false;
  
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.textRecord('Hello NFC')]);

      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
        result = true;
      }
    } catch (ex) {
      console.warn(ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  
    return result;
  }

  return (
    <TouchableOpacity 
      onPress={writeNdef} 
      style={styles.button}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>Write To A Tag</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#32cd32',
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

export default WriteButton;
