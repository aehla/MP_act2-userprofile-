import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Subheading } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const NameTitle = ({ name, surname, isDarkModeEnabled, joinedText }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.profileDetails}>
      {/* Name changes to white in dark mode */}
      <Title style={[styles.name, { color: isDarkModeEnabled ? '#fff' : colors.text }]}>{name}</Title>
      
      {/* Surname changes to white in dark mode */}
      <Title style={[styles.surname, { color: isDarkModeEnabled ? '#fff' : '#808080', marginTop: -10 }]}>{surname}</Title>
      
      {/* Joined text color adjusts for dark mode */}
      <Subheading style={[styles.joinedText, { color: isDarkModeEnabled ? '#bbb' : '#808080' }]}>{joinedText}</Subheading>
    </View>
  );
};

const styles = StyleSheet.create({
  profileDetails: {
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  surname: {
    fontSize: 24,
    fontWeight: '300',
  },
  joinedText: {
    color: '#808080',
  },
});

export default NameTitle;
