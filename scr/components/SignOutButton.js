import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Subheading } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignOutButton = () => {
  const handleSignOut = () => {
    console.log('Signing out...');
  };

  return (
    <View style={styles.signOutContainer}>
      <Button mode="contained" onPress={handleSignOut} style={styles.signOutButton}>
        <View style={styles.signOutContent}>
          <Icon name="logout" size={24} color="#fff" />
          <Subheading style={styles.signOutText}>Sign Out</Subheading>
        </View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  signOutContainer: {
    marginTop: 'auto',
  },
  signOutButton: {
    backgroundColor: '#A594F9',
    paddingVertical: 8,
  },
  signOutContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signOutText: {
    color: '#fff',
  },
});

export default SignOutButton;
