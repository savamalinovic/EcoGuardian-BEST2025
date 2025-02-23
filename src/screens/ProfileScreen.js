import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  // Dummy podaci
  const userName = 'Nikolina';
  const userPoints = 4;
  const plants = [
    { id: 1, name: 'P1', streakesRequired: 7, image: require('../images/dodatno/plants/p1.png') },
    { id: 2, name: 'P2', streakesRequired: 14, image: require('../images/dodatno/plants/p2.png') },
    { id: 3, name: 'P3', streakesRequired: 21, image: require('../images/dodatno/plants/p3.png') },
    { id: 4, name: 'P4', streakesRequired: 28, image: require('../images/dodatno/plants/p4.png') },
    { id: 5, name: 'P5', streakesRequired: 35, image: require('../images/dodatno/plants/p5.png') },
    { id: 6, name: 'P6', streakesRequired: 42, image: require('../images/dodatno/plants/p6.png') },
    { id: 7, name: 'P7', streakesRequired: 49, image: require('../images/dodatno/plants/p7.png') },
    { id: 8, name: 'P8', streakesRequired: 56, image: require('../images/dodatno/plants/p8.png') },
    { id: 9, name: 'P9', streakesRequired: 63, image: require('../images/dodatno/plants/p9.png') },
    { id: 10, name: 'P10', streakesRequired: 70, image: require('../images/dodatno/plants/p10.png') },
    { id: 11, name: 'P12', streakesRequired: 77, image: require('../images/dodatno/plants/p11.png') },
    { id: 12, name: 'P12', streakesRequired: 84, image: require('../images/dodatno/plants/p12.png') },
    { id: 13, name: 'P13', streakesRequired: 91, image: require('../images/dodatno/plants/p13.png') },
    { id: 14, name: 'P14', streakesRequired: 98, image: require('../images/dodatno/plants/p14.png') },
    { id: 15, name: 'P15', streakesRequired: 105, image: require('../images/dodatno/plants/p15.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../images/dodatno/myprofile.png')} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.points}>Streak: {userPoints}</Text>
        </View>
      </View>

      {/* Lozinka */}
      <View style={styles.passwordSection}>
        <Text style={styles.passwordText}>Promijeni lozinku</Text>
      </View>

      {/* Biljke */}
      <Text style={styles.plantsTitle}>Moje biljke</Text>
      <View style={styles.plantsContainer}>
        {plants.map((plant) => (
          <View key={plant.id} style={styles.plantCard}>
            <Image
            source={require("../images/dodatno/lockImage.png")}
            style={{height: 40, width: 20}}
            />
            <Image
              source={plant.image}
              style={[styles.plantImage, { width: 70, height: 80}]}
              resizeMode="cover"
            />
            <View style={styles.plantText}>
              <Text style={styles.plantName}>{plant.name}</Text>
              <Text style={styles.streakesRequired}>Potreban streak: {plant.streakesRequired}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4EEE8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 26,
    fontFamily: 'Roboto', 
    fontWeight: 'bold',
    color: '#333',
  },
  points: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
  passwordSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  passwordText: {
    fontSize: 16,
    color: '#007BFF',
  },
  plantsTitle: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  plantsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 70
  },
  plantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    
    
  },
  plantImage: {
    borderRadius: 10,
    marginRight: 10, 
    
    opacity: 0.4
    
  },
  plantText: {
    flex: 1,
    
    opacity: 0.4
    
  },
  plantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  streakesRequired: {
    fontSize: 12,
    color: '#555',
  },
});

export default ProfileScreen;