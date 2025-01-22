import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Modal, Linking , Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../../../components/Avatar'; // Import Avatar component

const Profile = () => {
  const [modalVisible, setModalVisible] = useState({
    personalInfo: false,
    education: false,
    socialMedia: false,
  });

  const openModal = (section) => {
    setModalVisible({ ...modalVisible, [section]: true });
  };

  const closeModal = (section) => {
    setModalVisible({ ...modalVisible, [section]: false });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Avatar
          size={100}
          source={{ uri: 'https://example.com/your-avatar-image.jpg' }}
          fallback="EG"
          style={styles.avatar}
        />
        <Text style={styles.nameText}>Ella D. Guillena</Text>
      </View>

      {/* Sections */}
      {['personalInfo', 'education', 'socialMedia'].map((key, index) => (
        <View style={styles.sectionContainer} key={index}>
          <TouchableOpacity onPress={() => openModal(key)}>
            <View style={styles.sectionHeader}>
              <Icon
                name={key === 'personalInfo' ? 'person' : key === 'education' ? 'school' : 'social-distance'}
                size={24}
                color="#6C63FF"
                style={styles.icon}
              />
              <Text style={styles.sectionTitle}>
                {key === 'personalInfo' ? 'Personal Information' : key === 'education' ? 'Education' : 'Social Media'}
              </Text>
              <Icon name="chevron-right" size={24} color="#201B51" />
            </View>
          </TouchableOpacity>
        </View>
      ))}

      {/* Modal */}
      {Object.entries(modalVisible).map(([key, visible]) => (
        <Modal
          key={key}
          visible={visible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => closeModal(key)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <ScrollView contentContainerStyle={styles.modalScroll}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => closeModal(key)}
                >
                  <Icon name="close" size={24} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.modalTitle}>
                  {key === 'personalInfo' ? 'Personal Information' : key === 'education' ? 'Education' : 'Social Media'}
                </Text>
                <View>
                  {key === 'personalInfo' && (
                    <Text style={styles.modalText}>
                      <Text style={styles.boldText}>Full Name: </Text>Ella Degala Guillena{'\n'}
                      <Text style={styles.boldText}>Phone: </Text>+63 968 6515 965{'\n'}
                      <Text style={styles.boldText}>Email: </Text>guillena.ella7@gmail.com{'\n'}
                      <Text style={styles.boldText}>Website: </Text>https://ellachim.carrd.co/{'\n'}
                      <Text style={styles.boldText}>Address: </Text>P6, Mintabon, Talisayan, Misamis Oriental{'\n\n'}
                      <Text style={styles.boldText}>ABOUT ME:</Text>{'\n'}
                      Hello There! I am Ella D. Guillena, a simple girl who loves to ambition. I love trying new things and learning new stuff. 
                      I would describe myself as hardworking and I am very consistent and committed to my work, especially if I like what I am doing. {'\n\n'}
                      I would also describe myself as a fast learner and can manage my time. I keep myself focused and focused on what I am doing.{'\n\n'}
                      Above all "I don't chase, I attract. What belongs to me, will simply find me."
                                          </Text>
                  )}
                  {key === 'education' && (
                    <View>
                      <Text style={styles.boldText}>Elementary</Text>
                      <View style={styles.educationItem}>
                        <Icon name="school" size={18} color="#F6B01A" />
                        <Text style={styles.educationText}>Babanlagan Elementary School - 2015 - 2016</Text>
                      </View>
                      <Text>Graduated With Honors</Text>

                      <Text style={styles.boldText}>Junior High School</Text>
                      <View style={styles.educationItem}>
                        <Icon name="school" size={18} color="#F6B01A" />
                        <Text style={styles.educationText}>Talisayan National High School - 2019 - 2020</Text>
                      </View>
                      <Text>Graduated With Honors</Text>

                      <Text style={styles.boldText}>Senior High School</Text>
                      <View style={styles.educationItem}>
                        <Icon name="school" size={18} color="#F6B01A" />
                        <Text style={styles.educationText}>Talisayan National High School (SHS) - 2021 - 2022</Text>
                      </View>
                      <Text>Graduated With High Honors</Text>

                      <Text style={styles.boldText}>College</Text>
                      <View style={styles.educationItem}>
                        <Icon name="school" size={18} color="#F6B01A" />
                        <Text style={styles.educationText}>University of Science and Technology of Southern Philippines - 2022 - Present</Text>
                      </View>
                      <Text>Currently Taking up Bachelor of Science in Information Technology</Text>
                    </View>
                  )}
                  {key === 'socialMedia' && (
  <View style={styles.socialMediaRow}>
    <TouchableOpacity
      style={styles.socialMediaLink}
      onPress={() => Linking.openURL('https://www.instagram.com/ellyven.io/')}
    >
      <View style={styles.socialMediaItem}>
        <Image 
          source={require('../../../assets/instagram.png')} 
          style={styles.socialMediaImage} 
        />
        <Text style={styles.socialMediaText}>Instagram</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.socialMediaLink}
      onPress={() => Linking.openURL('https://www.facebook.com/aehla.xyz')}
    >
      <View style={styles.socialMediaItem}>
        <Image 
          source={require('../../../assets/facebook.png')} 
          style={styles.socialMediaImage} 
        />
        <Text style={styles.socialMediaText}>Facebook</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.socialMediaLink}
      onPress={() => Linking.openURL('https://twitter.com/gellaaaxxx?t=1yGfEyxP-3mOR7fJ70d7wg&s=09')}
    >
       <View style={styles.socialMediaItem}>
              <Image
                source={require('../../../assets/x.png')}
                style={styles.twitterIcon} // Apply the Twitter-specific style
              />
              <Text style={styles.socialMediaText}> X  </Text>
      </View>
    </TouchableOpacity>
  </View>
)}

                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#6C63FF',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#201B51',
    padding: 20,
    alignItems: 'center',
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    marginRight: 8,
    color: '#F6B01A',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  modalScroll: {
    paddingBottom: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#201B51',
    padding: 8,
    borderRadius: 50,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    lineHeight: 25,
    color: '#555',
    padding: 5,
  },  
  boldText: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  educationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  educationText: {
    marginLeft: 8,
    fontSize: 16,
  },
  socialMediaLink: {
    marginVertical: 10,
    alignItems: 'center', // Center align each link in the column
  },
  socialMediaText: {
    fontSize: 16,
    color: '#201B51',
    textDecorationLine: 'none',
    marginTop: 5,
    letterSpacing: 0, // Ensure no additional spacing is applied
    fontWeight: 'bold',
  },  
  socialMediaItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 12,
  },
  socialMediaImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },
  socialMediaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute icons evenly
    alignItems: 'center',
    marginVertical: 12,
  },
  twitterIcon: {
    width: 75, // Match the size with other social media icons
    height: 50,
  },  
});

export default Profile;
