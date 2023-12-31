import React, { ReactElement } from 'react'
import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import { useColorScheme } from 'react-native-appearance'
import ThemeProvider from './ThemeProvider'
import AppNavigator from './AppNavigator'
import awsconfig from './aws-exports'

const DarkTheme = {
  dark: true,
  colors: {
    primary: '#50E3C2',
    background: '#1D1E1F',
    card: '#1D1E1F',
    text: '#ffffff',
    border: '#ff06f4'
  }
}

const LightTheme = {
  dark: false,
  colors: {
    primary: '#ff06f4',
    background: '#ffffff',
    card: '#1D1E1F',
    text: '#ffffff',
    border: '#ff06f4'
  }
}

const MEMORY_KEY_PREFIX = '@MyStorage:'

let dataMemory: any = {}

class MyStorage {
  // the promise returned from sync function
  static syncPromise = null

  // set item with the key
  static setItem(key: string, value: string): string {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  // get item with the key
  static getItem(key: string): string {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  // remove item with the key
  static removeItem(key: string): boolean {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  // clear out the storage
  static clear(): object {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: false
  },
  storage: MyStorage
})

const App = (): ReactElement => {
  /**
   * Subscribe to color scheme changes with a hook
   */
  const scheme = useColorScheme()
  return (
    <>
      <ThemeProvider theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <AppNavigator />
      </ThemeProvider>
    </>
  )
}

export default App
