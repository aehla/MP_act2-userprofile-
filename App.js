import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Provider as PaperProvider, DarkTheme, DefaultTheme } from 'react-native-paper';
import UserProfile from './src/pages/UserProfile'; // Correct the path

const App = () => {
  const systemTheme = useColorScheme(); // Detect system theme (light or dark)
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(systemTheme === 'dark');

  useEffect(() => {
    // Automatically set dark mode based on system theme
    setDarkModeEnabled(systemTheme === 'dark');
  }, [systemTheme]);

  const theme = isDarkModeEnabled ? DarkTheme : DefaultTheme;

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev); // Toggle the dark mode state
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkModeEnabled ? 'light-content' : 'dark-content'} />
        <UserProfile toggleDarkMode={toggleDarkMode} isDarkModeEnabled={isDarkModeEnabled} />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
