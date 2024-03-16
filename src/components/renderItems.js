import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

const arePropsEqual = (prevProps, nextProps) => {
  return (
    prevProps.item.id === nextProps.item.id &&
    prevProps.item.quantity === nextProps.item.quantity &&
    prevProps.item.price === nextProps.item.price &&
    prevProps.item.rarity === nextProps.item.rarity
  );
};

const InventoryItem = React.memo(({ item, onPress }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(item)}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
            <Text style={[styles.itemName, styles[item.rarity?.toLowerCase() ?? 'common']]}>{item.name ?? 'Unnamed Item'}</Text>
            <Text style={styles.itemQuantity}>{item.quantity ?? '0'}</Text>
        </View>
        <Text style={styles.itemPrice}>{`${item.price ?? '0'} Gold`}</Text>
    </TouchableOpacity>
), arePropsEqual);


// Assuming styles is a StyleSheet object that includes itemContainer, itemImage, etc.
const styles = StyleSheet.create({
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
});



export default InventoryItem;
