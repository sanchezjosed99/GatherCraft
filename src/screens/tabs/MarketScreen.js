import React, { useState } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, Image, SafeAreaView,
} from 'react-native';
import { ButtonGroup, SearchBar } from 'react-native-elements';

const marketData = [
  {
    id: '1',
    name: 'Brilliant Aquamarine Ore',
    seller: 'BreakOut',
    price: '8M',
    quantity: 'x8',
    timeLeft: '23hr',
   // Replace with actual image URL or local source
  },
  // Add more items here...
];

export default function MarketScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons = ['Buy', 'Your Listings'];
  const [search, setSearch] = useState('');
  const updateIndex = (index) => {
    setSelectedIndex(index);
    // Update the list shown based on tab selected
  };
  const renderMarketItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      {/* Replace with your Image component */}
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemSeller}>{item.seller}</Text>
        <View style={styles.itemFooter}>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.itemQuantity}>{item.quantity}</Text>
          <Text style={styles.itemTime}>{item.timeLeft}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.header}>Market</Text>
    <SearchBar
      placeholder="Search"
      onChangeText={setSearch}
      value={search}
      containerStyle={styles.searchBar}
      inputContainerStyle={styles.searchBarInput}
    />
    <ButtonGroup
      onPress={updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={styles.buttonGroupContainer}
      selectedButtonStyle={styles.selectedButton}
    />
    <FlatList
      style={styles.list}
      data={marketData} // The data array from your state or props
      renderItem={renderMarketItem} // The function you wrote for rendering each item
      keyExtractor={item => item.id}
    />
    <TouchableOpacity style={styles.listItemButton}>
      <Text style={styles.buttonText}>List Item</Text>
    </TouchableOpacity>
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
  list: {
    flex: 1,
  },
  listItemButton: {
    backgroundColor: '#4a4a4a',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  listItem: {
    backgroundColor: '#1e1e1e',
  },
  listItemTitle: {
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontWeight: 'bold',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  itemDetailsText: {
    color: "#fff",
  },
  itemName: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
  },
  itemSeller:{
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
  },
  itemTime: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
  },
  itemQuantity: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  itemPrice: {
    color: '#FFD700', // Gold color
    fontSize: 18,
  },
  searchBar: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  listItemButton: {
    backgroundColor: '#4a4a4a',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingVertical: 1,
    textAlign: 'center',
    backgroundColor: '#373737',
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
