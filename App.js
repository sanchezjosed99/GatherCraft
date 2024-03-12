import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Image, StatusBar, SafeAreaView, FlatList } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Ensure you have expo/vector-icons installed
import InventoryScreen from './src/components/Inventory';

export default function App() {
  return (
    <InventoryScreen/>
  );
}
