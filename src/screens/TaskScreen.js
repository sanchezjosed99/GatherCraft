import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const TaskScreen = () => {
  // Sample data - replace this with actual data from your game
  const quests = [
    { id: '1', title: 'The Scions of the Seventh Dawn', type: 'Main Scenario', description: 'Meet with Minfilia in the Waking Sands.', completed: false },
    { id: '2', title: 'A Wild Rose by Any Other Name', type: 'Main Scenario', description: 'Learn the true identity of the masked man.', completed: false },
    // Add more quests here...
    { id: '3', title: 'Yarns for the Yawning', type: 'Side Quest', description: 'Deliver balls of yarn to Tired-looking Terry.', completed: false },
    // Add more side quests here...
  ];

  const renderQuestItem = ({ item }) => (
    <TouchableOpacity style={[styles.itemContainer, item.completed ? styles.itemCompleted : {}]}>
      <Text style={styles.questTitle}>{item.title}</Text>
      <Text style={styles.questType}>{item.type}</Text>
      <Text style={styles.questDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Tasks</Text>
      <FlatList
        data={quests}
        renderItem={renderQuestItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
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
    paddingVertical: 1,
    textAlign: 'center',
    backgroundColor: '#373737', // Or any color that fits your design
  },
  listContent: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    backgroundColor: '#202020',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemCompleted: {
    backgroundColor: '#3C3C3C',
  },
  questTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  questType: {
    color: '#FFD700',
    fontSize: 16,
  },
  questDescription: {
    color: '#CCCCCC',
    fontSize: 14,
    marginTop: 5,
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

export default TaskScreen;
