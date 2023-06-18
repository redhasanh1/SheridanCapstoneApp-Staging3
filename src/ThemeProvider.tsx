import React, { memo } from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

interface ThemeProviderT {
  children?: React.ReactNode
  theme: {
    dark: boolean
    colors: {
      primary: string
      background: string
      card: string
      text: string
      border: string
      notification: string // Add the notification property
    }
  }
}

const ThemeProvider = memo<ThemeProviderT>(({ children, theme }) => {
  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors
    }
  };

  return (
    <AppearanceProvider>
      <NavigationContainer theme={navigationTheme}>{children}</NavigationContainer>
    </AppearanceProvider>
  )
})

export default ThemeProvider
