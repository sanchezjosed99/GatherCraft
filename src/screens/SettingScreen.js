import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

const SettingScreen = () => {
  // States for different settings
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Assume the app has dark mode feature

  // Toggles for the switches
  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Settings</Text>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleNotifications}
          value={isNotificationsEnabled}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
      <View style={styles.footer}>
  <Text style={styles.footerText}>Currently Inactive</Text>
  <View style={styles.footerRow}>
    <Text style={styles.footerText}>Inventory: 59/120</Text>
    <Text style={styles.footerText}>Gold: 164</Text>
  </View>
</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373737',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingVertical: 20,
    textAlign: 'center',
    backgroundColor: '#373737',
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#303030',
  },
  settingText: {
    color: '#FFFFFF',
    fontSize: 18,
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
});

export default SettingScreen;
