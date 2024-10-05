import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { List, Subheading } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Settings = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(!isNotificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!isDarkModeEnabled);

  return (
    <View>
      <Subheading style={styles.sectionHeader}>Settings</Subheading>
      <List.Section>
        {/* Notifications Toggle */}
        <List.Item
          title="Notifications"
          left={() => (
            <View style={styles.iconContainer}>
              <Icon name="notifications" size={24} color="#A594F9" />
            </View>
          )}
          right={() => (
            <TouchableOpacity
              onPress={toggleNotifications}
              style={[
                styles.customToggle,
                isNotificationsEnabled ? styles.customToggleEnabled : styles.customToggleDisabled,
              ]}
            >
              <View style={[styles.toggleThumb, isNotificationsEnabled && styles.thumbEnabled]}>
                <Icon
                  name={isNotificationsEnabled ? "notifications-active" : "notifications-off"}
                  size={20}
                  color="#FFF"
                />
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Dark Mode Toggle */}
        <List.Item
          title="Dark Mode"
          left={() => (
            <View style={styles.iconContainer}>
              <Icon name="brightness-4" size={24} color="#A0DEFF" />
            </View>
          )}
          right={() => (
            <TouchableOpacity
              onPress={toggleDarkMode}
              style={[
                styles.customToggle,
                isDarkModeEnabled ? styles.customToggleEnabled : styles.customToggleDisabled,
              ]}
            >
              <View style={[styles.toggleThumb, isDarkModeEnabled && styles.thumbEnabled]}>
                <Icon
                  name={isDarkModeEnabled ? "nights-stay" : "wb-sunny"}
                  size={20}
                  color="#FFF"
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: -7,
    color: '#808080',
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
    backgroundColor: '#1E2A5E', // Background color when enabled
  },
  customToggleDisabled: {
    backgroundColor: '#1E2A5E', // Background color when disabled
  },
  toggleThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#A0DEFF', // Default thumb color
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: 0 }],
  },
  thumbEnabled: {
    backgroundColor: '#A0DEFF', // Thumb color when enabled
    transform: [{ translateX: 20 }],
  },
});

export default Settings;
