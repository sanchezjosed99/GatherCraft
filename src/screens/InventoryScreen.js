import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Modal,
  Image, StatusBar, SafeAreaView, FlatList, TextInput
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import gameItems from '../components/gameItems'; // Ensure this component is correctly imported

function InventoryScreen() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [userAcquiredItems, setUserAcquiredItems] = useState([]); // This should be populated based on your game logic

    // Assuming you update userAcquiredItems somewhere in your game logic
    const filteredAndSortedItems = userAcquiredItems
        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

    const renderItem = ({ item }) => (
        <InventoryItem item={item} onPress={() => setSelectedItem(item)} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Inventory</Text>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search items..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <View style={styles.sortButtonsContainer}>
                    <TouchableOpacity onPress={() => setSortOrder('asc')}>
                        <Text style={styles.headerTextLeft}>Sort Ascending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSortOrder('desc')}>
                        <Text style={styles.headerTextRight}>Sort Descending</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar barStyle="light-content" />
            <FlatList
                data={filteredAndSortedItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            {selectedItem && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={!!selectedItem}
                    onRequestClose={() => setSelectedItem(null)}
                >
                    <TouchableOpacity style={styles.centeredView} onPressOut={() => setSelectedItem(null)}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalItemName}>{selectedItem.name}</Text>
                            <Text style={styles.modalItemDetails}>{selectedItem.type} - {selectedItem.rarity}</Text>
                            <Text style={styles.modalItemDescription}>{selectedItem.description}</Text>
                            <Text style={styles.modalItemLevel}>Level: {selectedItem.level}</Text>
                            <Text style={styles.modalItemPrice}>Vendor Sell Price: {selectedItem.price} Gold</Text>
                            <TouchableOpacity style={styles.sellButton}>
                                <Text style={styles.sellButtonText}>Sell</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
            )}
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
    height: 70,
    backgroundColor: '#373737',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#fff',
    marginTop: 6,
    borderBottomWidth: 1,
    borderColor: '#262626',
    paddingTop: 20,
    paddingBottom: 0,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTextLeft: {
    color: 'white',
    marginLeft: 'auto',
    position: 'relative',
    bottom: 28,
    right: 90,
  },
  headerTextRight: {
    color: 'white',
    marginLeft: 'auto',
    position: 'relative',
    bottom: 28,
    left: 90,
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
  itemQuantity: {
    color: '#AAA',
    fontSize: 14,
  },
  itemPrice: {
    color: '#FFD700', // Gold color
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#373737',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalItemName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  modalItemDetails: {
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
  },
  modalItemDescription: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
  },
  modalItemPrice: {
    color: '#FFD700',
    fontSize: 18,
    marginBottom: 20,
  },
  sellButton: {
    backgroundColor: '#e84118',
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
  sellButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
   itemInfo: {
    color: '#FFF',
    fontSize: 14,
  },
  modalItemLevel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#575757',
},
itemName: {
    fontSize: 18,
    color: "#fff",
},
itemQuantity: {
    fontSize: 14,
    color: "#fff",
},
itemPrice: {
    fontSize: 18,
    color: "#FFD700",
},
itemImage: {
    width: 75,
    height: 75,
    overflow: 'visible',
},
// Rarity styles
Mmundane: {
  color: 'white', // White theme for Mundane
},
uncommon: {
  color: 'green', // Green theme for Uncommon
},
rare: {
  color: 'blue', // Blue theme for Rare
},
exotic: {
  color: 'gold', // Gold theme for Exotic
},
mythic: {
  color: 'red', // Red theme for Mythic
},
arcane: {
  color: 'purple', // Purple theme for Arcane
},
celestial: {
  color: 'cyan', // Cyan for Celestial, you can also use backgroundColor here for glittering effect
},
searchBar: {
  backgroundColor: '#fff',
  paddingHorizontal: 1,
  marginVertical: 10,
  borderRadius: 10,
  height: 20, // Adjust based on your design
  width: '35%',
  fontSize: 16,
  color:'#777777',
},
sortButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 0,
  marginBottom: 15,
  letterSpacing: 20,
  color:'#fff',
},
}
);

export default InventoryScreen;
