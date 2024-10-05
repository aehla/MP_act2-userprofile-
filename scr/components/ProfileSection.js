import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Title, Subheading, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-paper';

const ProfileSection = () => {
  const { colors } = useTheme();

  const handleEditProfile = () => {
    console.log('Edit profile pressed');
  };

  return (
    <View>
      {/* Profile Details */}
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/avatar.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity onPress={handleEditProfile} style={styles.editIconContainer}>
            <Icon name="edit" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileDetails}>
          <Title style={[styles.name, { color: colors.text }]}>Ella</Title>
          <Title style={[styles.surname, { color: '#808080', marginTop: -10 }]}>Guillena</Title>
          <Subheading style={styles.joinedText}>Joined 3 days ago</Subheading>
        </View>
      </View>

      {/* Manage User Section */}
      <Subheading style={styles.sectionHeader}>Profile</Subheading>
      <List.Section>
        <List.Item
          title="Manage user"
          left={() => <Icon name="person" size={24} color="#FFB6C1" />}
          right={() => <Icon name="chevron-right" size={24} color={colors.text} />}
          onPress={() => console.log('Manage user pressed')}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
  },
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
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
    color: '#808080',
  },
});

export default ProfileSection;
