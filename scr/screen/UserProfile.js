import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import Settings from '../components/Settings';
import SignOutButton from '../components/SignOutButton';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Profile Section */}
      <ProfileSection />

      <Divider style={styles.divider} />

      {/* Settings */}
      <Settings />

      {/* Sign Out Button */}
      <SignOutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 45,
  },
  divider: {
    marginVertical: 16,
  },
});

export default UserProfile;
