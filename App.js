import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Provider as PaperProvider, DarkTheme, DefaultTheme } from 'react-native-paper';
import UserProfile from './scr/screen/UserProfile'; // Update the import path

const App = () => {
  const colorScheme = useColorScheme();
  const isDarkModeEnabled = colorScheme === 'dark';

  const theme = isDarkModeEnabled ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkModeEnabled ? 'light-content' : 'dark-content'} />
        <UserProfile />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
