import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Import Drawer
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./MainApp";
import CoursesScreen from "./coursescreen";
import ProfileScreen from "./profile";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Courses") iconName = "book-outline";
          else if (route.name === "Profile") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6200EE",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white", height: 60 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Wrap Bottom Tabs inside Drawer
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Courses" component={CoursesScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
