import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import Screens
import OnboardingScreen from "./OnboardingScreen";
import SignUpScreen from "./SignUpScreen";
import LoginScreen from "./LoginScreen";
import CourseScreen from "./coursescreen";
import CourseDetails from "./CourseDetails";
import Screen from "./python";
import HomeScreen from "./home";
import ProfileScreen from "./profile";
import NotesScreen from "./NotesScreen";
import ndetail from "./ndetail";
import Review from "./review";
import QuizScreen from "./QuizScreen";
import QuizDetailScreen from "./QuizDetailScreen";
import ResultsScreen from "./ResultsScreen";
import CertificationsScreen from "./CertificationsScreen";
import ProjectsScreen from "./ProjectsScreen";
import SavedCoursesScreen from "./SavedCoursesScreen";
import MyCardScreen from "./MyCardScreen";
import HelpScreen from "./HelpScreen";
import PrivacyScreen from "./PrivacyScreen";
import ProgressScreen from "./ProgressScreen"
import ContactsScreen from "./ContactsScreen"
import ChatScreen from "./ChatScreen"
import ForgetScreen from "./ForgetScreen"
import SendResetCodeScreen from "./SendResetCodeScreen";
import Flash from "./Flash";
import UI from "./UI";
import Software from "./Software";
import Game from "./Game";
import GoogleLogin from "./GoogleLogin";



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// ✅ Bottom Tabs with Drawer Menu Icon
const BottomTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
            <Ionicons name="menu" size={30} color="black" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Courses") {
            iconName = focused ? "book" : "book-outline";
          } 
          else if (route.name === "Progress") {
            iconName = focused ? "bar-chart" : "bar-chart-outline"; // Updated icon for Progress
          }
           else if (route.name === "Flash") {
            iconName = focused ? "flash" : "flash-outline";
          }
          else if (route.name === "Chat") {
            iconName = focused ? "chatbubble" : "chatbubble-outline"; // Updated icon for Progress
          }
          else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
           else if (route.name === "Quiz") {
            iconName = focused ? "help-circle" : "help-circle-outline";
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6200EE",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white", height: 60 },
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CourseScreen} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Flash" component={Flash} />
      <Tab.Screen name="Chat" component={ContactsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      
     
    </Tab.Navigator>
  );
};

// ✅ Drawer Navigator with Icons & Bottom Tabs Inside
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#6200EE",
        drawerInactiveTintColor: "gray",
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Courses"
        component={CourseScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Flash"
        component={Flash} // replace with actual Flash component
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="flash-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Quiz"
        component={QuizScreen} // replace with actual Quiz component
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Chat"
        component={ContactsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};


// ✅ Main App with Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Google" component={GoogleLogin} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
        <Stack.Screen name="SendResetCodeScreen" component={SendResetCodeScreen} />
        <Stack.Screen name="home" component={DrawerNavigator} />
        <Stack.Screen name="Game" component={Game} />
        
        <Stack.Screen name="CourseScreen" component={CourseScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="UI" component={UI} />
        <Stack.Screen name="Software" component={Software} />
        
        <Stack.Screen name="Python" component={Screen} />
        <Stack.Screen name="NotesScreen" component={NotesScreen} />
        <Stack.Screen name="ndetail" component={ndetail} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="QuizDetailScreen" component={QuizDetailScreen} />
        <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
        <Stack.Screen name="Certifications" component={CertificationsScreen} />
<Stack.Screen name="Projects" component={ProjectsScreen} />
<Stack.Screen name="SavedCourses" component={SavedCoursesScreen} />
<Stack.Screen name="MyCard" component={MyCardScreen} />
<Stack.Screen name="Help" component={HelpScreen} />
<Stack.Screen name="Privacy" component={PrivacyScreen} />
<Stack.Screen name="ContactsScreen" component={ContactsScreen} />
<Stack.Screen name="ChatScreen" component={ChatScreen} />
<Stack.Screen name="ProgressScreen" component={ProgressScreen} />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
