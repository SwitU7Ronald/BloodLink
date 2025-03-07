import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../context/ThemeContext";

const LoginScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    if (phoneNumber.length === 10) {
      alert("OTP sent to +91 " + phoneNumber);
      // Navigate to OTP verification screen (if implemented)
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#ffffff" }]}>
      {/* Logo */}
      <Image source={require("../assets/Images/BloodLink.png")} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={[styles.title, { color: isDarkMode ? "#ff4d4d" : "#c0392b" }]}>
        Login to BloodLink
      </Text>

      {/* Phone Input */}
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: isDarkMode ? "#333" : "#f0f0f0" } // Fix applied here
        ]}
      >
        <Text style={[styles.countryCode, { color: isDarkMode ? "#fff" : "#333" }]}>+91</Text>
        <TextInput
          style={[styles.input, { color: isDarkMode ? "#fff" : "#000" }]}
          keyboardType="phone-pad"
          maxLength={10}
          placeholder="Enter phone number"
          placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
          value={phoneNumber}
          onChangeText={(text) => {
            const numericText = text.replace(/[^0-9]/g, ""); // Remove non-numeric characters
            setPhoneNumber(numericText);
          }}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      {/* Back to Screen */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={[styles.backText, { color: isDarkMode ? "#bbb" : "#555" }]}>Back to Main Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 15,
    width: "85%",
    height: 50,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    width: "85%",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    elevation: 5,
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
  backText: {
    fontSize: 16,
    marginTop: 15,
  },
});
