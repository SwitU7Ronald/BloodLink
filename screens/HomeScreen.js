import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../context/ThemeContext"; 

const HomeScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#ffffff" }]}>
      {/* BloodLink Logo */}
      <Image source={require("../assets/Images/BloodLink.png")} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={[styles.title, { color: isDarkMode ? "#ff4d4d" : "#c0392b" }]}>
        Welcome to BloodLink
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}
        onPress={() => navigation.navigate("ViewDonor")}
      >
        <Text style={styles.buttonText}>View Donors</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}
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
    paddingHorizontal: 20,
  },
  logo: {
    width: 180, // Increased width
    height: 180, // Increased height
    marginBottom: 10, // Reduced margin for better positioning
  },
  title: {
    fontSize: 28, // Bigger font size
    fontWeight: "bold",
    marginBottom: 25, // More spacing from logo
    textTransform: "uppercase",
    letterSpacing: 1.5,
    textAlign: "center",
  },
  button: {
    width: "80%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    elevation: 5, // Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  darkButton: {
    backgroundColor: "#e74c3c",
  },
  lightButton: {
    backgroundColor: "#b22222",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
