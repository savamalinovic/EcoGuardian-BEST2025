import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  // Dummy podaci
  const userName = 'Nikolina';
  const userPoints = 150;
  const plants = [
    { id: 1, name: 'P1', strikesRequired: 7, image: require('../images/dodatno/plants/p1.png') },
    { id: 2, name: 'P2', strikesRequired: 14, image: require('../images/dodatno/plants/p2.png') },
    { id: 3, name: 'P3', strikesRequired: 21, image: require('../images/dodatno/plants/p3.png') },
    { id: 4, name: 'P4', strikesRequired: 28, image: require('../images/dodatno/plants/p4.png') },
    { id: 5, name: 'P5', strikesRequired: 35, image: require('../images/dodatno/plants/p5.png') },
    { id: 6, name: 'P6', strikesRequired: 42, image: require('../images/dodatno/plants/p6.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../images/dodatno/plants/p1.png')} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.points}>Poeni: {userPoints}</Text>
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
              source={plant.image}
              style={[styles.plantImage, { width: 80, height: 80 }]}
              resizeMode="cover"
            />
            <View style={styles.plantText}>
              <Text style={styles.plantName}>{plant.name}</Text>
              <Text style={styles.strikesRequired}>Treba {plant.strikesRequired} strikeova</Text>
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
    backgroundColor: '#F7F7F7',
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
    fontFamily: 'Roboto', // You can replace with any custom font
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
    fontFamily: 'Roboto', // You can replace with any custom font
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  plantsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  plantImage: {
    borderRadius: 10,
    marginRight: 10,
  },
  plantText: {
    flex: 1,
  },
  plantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  strikesRequired: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProfileScreen;