import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-paper';

const Header = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.headerContainer}>
      <Icon name="arrow-back" size={24} color={colors.text} onPress={() => console.log('Back pressed')} />
      <View style={styles.headerTitle} />
      <Icon name="more-vert" size={24} color={colors.text} onPress={() => console.log('Menu pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingTop: Platform.OS === 'ios' ? 10 : 0, // Adjust padding for iOS and Android
    marginTop: Platform.OS === 'ios' ? -30 : -20, // Pulls up the header on iOS
    paddingHorizontal: 16, // Padding on the sides
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Header;
