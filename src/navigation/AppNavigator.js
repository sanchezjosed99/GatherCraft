import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";

import HomeScreen from "../screens/HomeScreen";
import InventoryScreen from "../screens/InventoryScreen";
import MarketScreen from "../screens/MarketScreen";
import TaskScreen from "../screens/TaskScreen";
import SettingScreen from "../screens/SettingScreen";
import SecondScreen from "../screens/SecondScreen";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tabs.Navigator
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
      <Tabs.Screen
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
      <Tabs.Screen
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
      <Tabs.Screen
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
      <Tabs.Screen
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
      <Tabs.Screen
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
    </Tabs.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
