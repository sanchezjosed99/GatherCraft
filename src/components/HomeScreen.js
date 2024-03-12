import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Ensure you have expo/vector-icons installed


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Home</Text>
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.profileTitle}>Sunny Meadows</Text>
            <Text style={styles.profileSubtitle}>Lvl. 21 Tier II</Text>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar(194 / 594)} />
            </View>
            <Text style={styles.capacity}>Total Capacity 194/594</Text>
          </View>
          <TouchableOpacity style={styles.menuOption}>
            <FontAwesome name="shopping-bag" size={24} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.menuText}>Gathering</Text>
              <Text style={styles.menuSubtext}>Gather Raw Materials</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuOption}>
            <MaterialIcons name="build" size={24} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.menuText}>Crafting</Text>
              <Text style={styles.menuSubtext}>Craft Items & Refine Materials</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuOption}>
            <FontAwesome name="money" size={24} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.menuText}>Vendors</Text>
              <Text style={styles.menuSubtext}>Buy Items & Materials</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuOption}>
            <FontAwesome name="map-o" size={24} color="black" />
            <View style={styles.textContainer}>
              <Text style={styles.menuText}>World Map</Text>
              <Text style={styles.menuSubtext}>Travel Between Locations</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.inactiveMessage}>You're currently inactive, start a skill</Text>
          <View style={styles.navBar}>
            <TouchableOpacity style={styles.navItem}>
              <FontAwesome name="home" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <MaterialIcons name="backpack" size={24} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <FontAwesome name="shopping-cart" size={24} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <MaterialIcons name="list-alt" size={24} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <MaterialIcons name="more-horiz" size={24} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000', // Adjust based on your theme colors
    },
    contentContainer: {
      flexGrow: 1,
    },
    header: {
      height: 50,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    profileSection: {
      backgroundColor: '#1c1c1e',
      padding: 20,
      alignItems: 'center',
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginBottom: 10,
    },
    profileTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    profileSubtitle: {
      fontSize: 16,
      color: '#fff',
    },
    progressBarContainer: {
      height: 20,
      width: '100%',
      backgroundColor: '#3e3e40',
      borderRadius: 10,
      marginTop: 10,
    },
    progressBar: (percentage) => ({
      height: '100%',
      width: `${percentage * 100}%`,
      backgroundColor: 'green',
      borderRadius: 10,
    }),
    capacity: {
      marginTop: 5,
      color: '#fff',
    },
    menuOption: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2c2c2e',
      marginVertical: 8,
      padding: 20,
    },
    menuText: {
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#fff',
    },
    menuSubtext: {
      marginLeft: 10,
      fontSize: 14,
      color: '#999',
    },
    footer: {
      padding: 10,
      backgroundColor: '#1c1c1e',
    },
    inactiveMessage: {
      color: '#fff',
      textAlign: 'center',
      marginBottom: 10,
    },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    navItem: {
      alignItems: 'center',
    },
    textContainer: {
      marginLeft: 10,
    },
  });

  export default HomeScreen;
