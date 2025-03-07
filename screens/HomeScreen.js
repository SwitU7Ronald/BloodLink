import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Icons for the tabs

// Dummy Home Screen
const HomeTab = () => (
    <View style={styles.screen}>
        <Text style={styles.text}>Home Screen</Text>
    </View>
);

// Dummy Profile Screen
const ProfileTab = () => (
    <View style={styles.screen}>
        <Text style={styles.text}>Profile Screen</Text>
    </View>
);

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") iconName = "home-outline";
                    else if (route.name === "Profile") iconName = "person-outline";
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                headerShown: false, // 👈 Hide header on all screens
            })}
        >
            <Tab.Screen name="Home" component={HomeTab} />
            <Tab.Screen name="Profile" component={ProfileTab} />
        </Tab.Navigator>
    );
};


export default HomeScreen;

// Styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
