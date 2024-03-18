import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";

import HomeScreen from '../screens/tabs/HomeScreen';
import InventoryScreen from "../screens/tabs/InventoryScreen";
import MarketScreen from "../screens/tabs/MarketScreen";
import TaskScreen from "../screens/tabs/TaskScreen";
import SettingScreen from "../screens/tabs/SettingScreen";

import GatheringScreen from '../screens/homeButtons/GatheringScreen';
import CraftingScreen from '../screens/homeButtons/CrafingScreen';
import VendorScreen from '../screens/homeButtons/VendorScreen';
import WorldMapScreen from "../screens/homeButtons/WorldMapScreen";
import MiningScreen from '../screens/homeButtons/MiningScreen';
import HarvestingScreen from "../screens/homeButtons/HarvestingScreen";
import LoggingScreen from '../screens/homeButtons/LoggingScreen';
import SkinningScreen from "../screens/homeButtons/SkinnningScreen";


const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="Gathering" component={GatheringScreen} />
      <MainStack.Screen name="Crafting" component={CraftingScreen} />
      <MainStack.Screen name="Vendors" component={VendorScreen} />
      <MainStack.Screen name="WorldMap" component={WorldMapScreen} />
      <MainStack.Screen name="Harvesting" component={HarvestingScreen} />
      <MainStack.Screen name="Logging" component={LoggingScreen} />
      <MainStack.Screen name="Mining" component={MiningScreen} />
      <MainStack.Screen name="Skinning" component={SkinningScreen} />
    </MainStack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "#303030",
          backgroundColor: "#282828", // Dark gray color for the tab bar
        },
        tabBarActiveTintColor: "# ADD8E6", // White color for the active tab icon and label
        tabBarInactiveTintColor: "#ffffff", // Lighter color for inactive tab icon and label
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"home"} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Inventory" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"backpack"} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Market" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"shopping-cart"} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Tasks" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"list-alt"} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Settings" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"more-horiz"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
