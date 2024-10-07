import React, { useState } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Subheading, List, Divider, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-paper';
import Avatar from '../components/avatar';
import NameTitle from '../components/NameTitle';

const UserProfile = () => {
  const { colors } = useTheme();
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleDarkMode = () => {
    setDarkModeEnabled(prevMode => !prevMode);
  };

  const toggleNotifications = () => setNotificationsEnabled(!isNotificationsEnabled);
  const handleEditProfile = () => console.log('Edit profile pressed');
  const handleSignOut = () => console.log('Signing out...');

  return (
    <View style={[styles.container, { backgroundColor: isDarkModeEnabled ? '#333' : colors.background }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Icon name="arrow-back" size={24} color={isDarkModeEnabled ? '#fff' : colors.text} onPress={() => console.log('Back pressed')} />
        <View style={styles.headerTitle} />
        <Icon name="more-vert" size={24} color={isDarkModeEnabled ? '#fff' : colors.text} onPress={() => console.log('Menu pressed')} />
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Avatar onEditProfile={handleEditProfile} />
        <View style={styles.nameTitleContainer}>
          <NameTitle
            name="Ella"
            surname="Guillena"
            joinedText="Joined 3 Days ago."  // Added joinedText prop
            isDarkModeEnabled={isDarkModeEnabled}  // Pass dark mode state to NameTitle
          />
        </View>
      </View>

      <Subheading style={[styles.sectionHeader, { color: isDarkModeEnabled ? '#fff' : '#808080' }]}>Profile</Subheading>
      <List.Section>
        <List.Item
          title="Manage user"
          titleStyle={{ color: isDarkModeEnabled ? '#fff' : colors.text }}
          left={() => <Icon name="person" size={24} color="#FFB6C1" />}
          right={() => <Icon name="chevron-right" size={24} color={isDarkModeEnabled ? '#fff' : colors.text} />}
          onPress={() => console.log('Manage user pressed')}
        />
      </List.Section>

      <Divider style={styles.divider} />

      {/* Settings */}
      <Subheading style={[styles.sectionHeader, { color: isDarkModeEnabled ? '#fff' : '#808080' }]}>Settings</Subheading>
      <List.Section>
        <List.Item
          title="Notifications"
          titleStyle={{ color: isDarkModeEnabled ? '#fff' : colors.text }}
          left={() => <View style={styles.iconContainer}><Icon name="notifications" size={24} color="#A594F9" /></View>}
          right={() => (
            <TouchableOpacity
              onPress={toggleNotifications}
              style={[styles.customToggle, isNotificationsEnabled ? styles.customToggleEnabled : styles.customToggleDisabled]}
            >
              <View style={[styles.toggleThumb, isNotificationsEnabled && styles.thumbEnabled]}>
                <Icon name={isNotificationsEnabled ? "notifications-active" : "notifications-off"} size={20} color="#FFF" />
              </View>
            </TouchableOpacity>
          )}
        />

        <List.Item
          title="Dark Mode"
          titleStyle={{ color: isDarkModeEnabled ? '#fff' : colors.text }}
          left={() => <View style={styles.iconContainer}><Icon name="brightness-4" size={24} color="#A0DEFF" /></View>}
          right={() => (
            <TouchableOpacity
              onPress={toggleDarkMode}
              style={[styles.customToggle, isDarkModeEnabled ? styles.customToggleEnabled : styles.customToggleDisabled]}
            >
              <View style={[styles.toggleThumb, isDarkModeEnabled && styles.thumbEnabled]}>
                <Icon name={isDarkModeEnabled ? "nights-stay" : "wb-sunny"} size={20} color="#FFF" />
              </View>
            </TouchableOpacity>
          )}
        />
      </List.Section>

      {/* Sign Out Button */}
      <View style={styles.signOutContainer}>
        <Button mode="contained" onPress={handleSignOut} style={styles.signOutButton}>
          <View style={styles.signOutContent}>
            <Icon name="logout" size={24} color="#fff" />
            <Subheading style={styles.signOutText}>Sign Out</Subheading>
          </View>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 45,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
    marginTop: Platform.OS === 'ios' ? -30 : -20,
    paddingHorizontal: 16,
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  nameTitleContainer: {
    marginLeft: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customToggle: {
    width: 50,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    padding: 2,
  },
  customToggleEnabled: {
    backgroundColor: '#1E2A5E',
  },
  customToggleDisabled: {
    backgroundColor: '#1E2A5E',
  },
  toggleThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#A0DEFF',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: 0 }],
  },
  thumbEnabled: {
    backgroundColor: '#A0DEFF',
    transform: [{ translateX: 20 }],
  },
  divider: {
    marginVertical: 16,
  },
  signOutContainer: {
    marginTop: 'auto',
  },
  signOutButton: {
    backgroundColor: '#A594F9',
    borderRadius: 25,
  },
  signOutContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOutText: {
    color: '#fff',
    marginLeft: 8,
  },
});

export default UserProfile;
