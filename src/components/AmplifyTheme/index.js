import { StyleSheet } from 'react-native'

// Define your custom colors 
export const deepSquidInk = '#152939'
export const linkUnderlayColor = '#FFF'
export const errorIconColor = '#DD3F5B'
export const textInputColor = '#000000'
export const textInputBorderColor = '#152939'
export const placeholderColor = '#152939'
export const buttonColor = '#152939'
export const disabledButtonColor = '#152939'

// Define your custom styles
const AmplifyTheme = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    width: '100%',
    backgroundColor: '#FFF'
  },
  // ... other styles
  button: {
    backgroundColor: buttonColor,
    alignItems: 'center',
    padding: 16
  },
  buttonDisabled: {
    backgroundColor: disabledButtonColor,
    alignItems: 'center',
    padding: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600'
  },
  // ... other styles
})

export default AmplifyTheme
