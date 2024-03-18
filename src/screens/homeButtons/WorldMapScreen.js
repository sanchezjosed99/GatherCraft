import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Ensure you have expo/vector-icons installed


function WorldMapScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' />
        <ScrollView contentContainerStyle={styles.contentContainer}>
              <Text style={styles.header}>Home</Text>
            <View style={styles.profileSection}>
              <Text style={styles.profileTitle}>Sunny Meadows</Text>
              <Text style={styles.profileSubtitle}>Lvl. 21 Tier II</Text>
            </View>
        </ScrollView>
        <View style={styles.footer}>
  <Text style={styles.footerText}>Currently Inactive</Text>
  <View style={styles.footerRow}>
    <Text style={styles.footerText}>Inventory: 59/120</Text>
    <Text style={styles.footerText}>Gold: 164</Text>
  </View>
</View>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#373737',
    },
    contentContainer: {
      flexGrow: 1,
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#FFFFFF',
      paddingVertical: 1,
      textAlign: 'center',
      backgroundColor: '#373737',
    },
    profileSection: {
      backgroundColor: '#303030',
      padding: 20,
      alignItems: 'center',
      marginVertical: 4,
      padding: 20,
      borderRadius: 30,
      marginLeft: 10,
      marginRight: 10,
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
    capacity: {
      marginTop: 5,
      color: '#fff',
    },
    menuOption: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#303030',
      marginVertical: 4,
      padding: 20,
      borderRadius: 30,
      marginLeft: 10,
      marginRight: 10,
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
      backgroundColor: '#303030',
      padding: 10,
      borderTopWidth: 0.5,
      borderColor: '#000',
      alignItems: 'center', // Center align items
      justifyContent: 'center', // Center items vertically
      position: 'absolute', // Make sure it's at the bottom
      left: 0,
      right: 0,
      bottom: 0,
    },
    footerText: {
      color: '#fff',
      marginVertical: 5, // Add space between items vertically
      textAlign: 'center', // Center the text horizontally
    },
    footerRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%', // Use the full width of the footer
    },
    textContainer: {
      marginLeft: 10,
    },
  });

  export default WorldMapScreen;
