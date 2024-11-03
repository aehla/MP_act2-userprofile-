import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Provider as PaperProvider, DarkTheme, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from './src/pages/UserProfile';
import Signin from './src/pages/Signin';
import Signup from './src/pages/Signup';
import ForgotPassword from './src/pages/ForgotPassword';

const Stack = createStackNavigator();

const App = () => {
  const systemTheme = useColorScheme();
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(systemTheme === 'dark');

  useEffect(() => {
    setDarkModeEnabled(systemTheme === 'dark');
  }, [systemTheme]);

  const theme = isDarkModeEnabled ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={isDarkModeEnabled ? 'light-content' : 'dark-content'} />
          <Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
