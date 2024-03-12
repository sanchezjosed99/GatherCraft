import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Modal,
  Image, StatusBar, SafeAreaView, FlatList, TextInput
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { gameItems, weapons, armors, consumables } from './gameItems';
import itemImages from './itemMapping';  // Ensure this correctly maps item names to image paths

const InventoryScreen = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const convertItemsToInventoryFormat = () => {
        let idCounter = 1;
        const convertSection = (items) => {
            return Object.values(items).flat().map(item => ({
                id: String(idCounter++),
                name: item.name,
                quantity: '10',  // Assuming you are assigning default values for demo
                price: '1',  // Assuming default values for demo
                rarity: item.rarity,
                description: item.description || '',  // Provide default empty string if none
                level: item.level || 1,  // Provide default level if none
                image: itemImages[item.name],  // Fetch corresponding image from itemImages
            }));
        };

        return [
          ...convertSection(gameItems),
          ...convertSection(weapons),
          ...convertSection(armors),
          ...convertSection(consumables)
        ];
    };

    const inventoryItems = convertItemsToInventoryFormat();

    const filteredAndSortedItems = inventoryItems
        .filter(item => item.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => sortOrder === 'asc' ? a.name.toString().localeCompare(b.name) : b.name.toString().localeCompare(a.name));

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => setSelectedItem(item)}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={[styles.itemName, styles[item.rarity]]}>{item.name}</Text>
                <Text style={styles.itemQuantity}>{item.quantity}</Text>
            </View>
            <Text style={styles.itemPrice}>{item.price} Gold</Text>
        </TouchableOpacity>
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
                keyExtractor={item => item.id}
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
          <Text style={styles.inactiveMessage}>You're currently inactive, start a skill</Text>
          </View>
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
    padding: 'none',
    backgroundColor: '#373737',
    marginBottom: 15,
  },
  inactiveMessage: {
    color: '#fff',
    justifyContent: 'space-around',
    textAlign: "center",
    margin: 15,
    },
  navBar: {
    borderTopWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
    paddingTop: 15,
  },
  textContainer: {
    marginLeft: 15,
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
Mundane: {
    color: 'white', // White theme for Mundane
},
Uncommon: {
    color: 'green', // Green theme for Uncommon
},
Rare: {
    color: 'blue', // Blue theme for Rare
},
Exotic: {
    color: 'gold', // Yellow or gold for Exotic
},
Mythic: {
    color: 'red', // Red for Mythic
},
Arcane: {
    color: 'purple', // Creative liberty - purple for Arcane
},
Celestial: {
    color: 'cyan', // Hint towards celestial - cyan or light blue
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
