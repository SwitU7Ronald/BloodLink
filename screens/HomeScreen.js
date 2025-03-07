import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../context/ThemeContext"; // Import Theme Context

const HomeScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext); // Get theme from context
  console.log("HomeScreen Detected Theme:", theme); // Debugging log

  const isDarkMode = theme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#222" : "#f8f8f8" }]}>
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
        Welcome to BloodLink
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isDarkMode ? "#444" : "#e74c3c" }]}
        onPress={() => navigation.navigate("ViewDonor")}
      >
        <Text style={styles.buttonText}>View Donors</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isDarkMode ? "#444" : "#e74c3c" }]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isDarkMode ? "#444" : "#e74c3c" }]}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    padding: 12,
    width: 200,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
