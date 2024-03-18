import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import * as Progress from 'react-native-progress';

function LoggingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Logging</Text>
        <View style={styles.container}>


            <View style={styles.progressContainer}>
                <Text style={styles.xpText}>                              51,470 / 200,000 XP  25%</Text>
                <Progress.Bar progress={0.25} width={390} animationConfig={{ bounciness: 0 }} animationType="spring"/>
            </View>
            <ScrollView>
            <View style={styles.locationContainer}>
                <Text style={styles.locationTitle}>Sunny Meadows</Text>
                <Text style={styles.locationDetails}>Lvl. 21 Tier II</Text>
                <Text style={styles.locationDetails}>Capacity 75/175</Text>
                <Text style={styles.locationDetails}>Gather Wait Time 5s</Text>
            </View>
            <View style={styles.dropsContainer}>
                <Text style={styles.dropsTitle}>Drops</Text>
                <View style={styles.dropItem}>
                    <Text style={styles.dropText}>Iron Ore</Text>
                    <Text style={styles.dropPercentage}>90%</Text>
                </View>
                <View style={styles.dropItem}>
                    <Text style={styles.dropText}>Emerald Ore</Text>
                    <Text style={styles.dropPercentage}>10%</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.gatherButton}>
                <Text style={styles.gatherButtonText}>Gather</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.footer}>
  <Text style={styles.footerText}>Currently Inactive</Text>
  <View style={styles.footerRow}>
    <Text style={styles.footerText}>Inventory: 59/120</Text>
    <Text style={styles.footerText}>Gold: 164</Text>
  </View>
</View>
        </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#373737',
        padding: 20,
    },
    headerContainer: {
        marginBottom: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        paddingVertical: 1,
        textAlign: 'center',
        backgroundColor: '#373737',
      },
    progressContainer: {
        marginBottom: 20,
    },
    xpText: {
        color: '#FFFFFF',
        marginBottom: 5,
    },
    progressBar: {
        height: 20,
        width: '100%',
    },
    percentageText: {
        color: '#FFFFFF',
        textAlign: 'right',
    },
    locationContainer: {
        backgroundColor: '#303030',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    locationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    locationDetails: {
        fontSize: 16,
        color: '#fff',
        marginTop: 5,
    },
    dropsContainer: {
        backgroundColor: '#303030',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    dropsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    dropItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    dropText: {
        color: '#fff',
        fontSize: 16,
    },
    dropPercentage: {
        color: '#fff',
        fontSize: 16,
    },
    gatherButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    gatherButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
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

export default LoggingScreen;
