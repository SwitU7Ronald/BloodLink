import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  // State Variables
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Send OTP Function
  const sendOtp = () => {
    if (phoneNumber.length !== 10) {
      Alert.alert("Invalid Phone Number", "Enter a valid 10-digit Indian phone number.");
      return;
    }
    setIsOtpSent(true);
    // Alert.alert("OTP Sent", "Your OTP is 1122 for testing.");
  };

  // Verify OTP Function
  const verifyOtp = () => {
    if (otp === "1122") {
      setIsOtpVerified(true);
      // Alert.alert("OTP Verified", "You are now logged in.");
      navigation.navigate("Home");  // Navigate to HomeScreen after successful OTP verification
    } else {
      Alert.alert("Invalid OTP", "Please enter the correct OTP.");
    }
  };

  const isDarkMode = colorScheme === "dark"; // Check if the theme is dark

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#fff" }]}>
      {/* Logo */}
      <Image source={require("../assets/Images/BloodLink.png")} style={styles.logo} />

      {/* Title */}
      <Text style={[styles.title, { color: isDarkMode ? "#ff4d4d" : "#c0392b" }]}>Login to BloodLink</Text>

      {/* Phone Number Input */}
      {!isOtpSent && (
        <>
          <View style={[styles.inputContainer, { backgroundColor: isDarkMode ? "#333" : "#f0f0f0" }]}>
            <Text style={[styles.countryCode, { color: isDarkMode ? "#fff" : "#333" }]}>+91</Text>
            <TextInput
              style={[styles.input, { color: isDarkMode ? "#fff" : "#000" }]}
              keyboardType="phone-pad"
              maxLength={10}
              placeholder="Enter phone number"
              placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text.replace(/[^0-9]/g, ""))}
            />
          </View>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDarkMode ? "#e74c3c" : "#b22222" }]}
            onPress={sendOtp}
          >
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </>
      )}

      {/* OTP Verification */}
      {isOtpSent && !isOtpVerified && (
        <>
          <TextInput
            style={[styles.inputContainer, { color: isDarkMode ? "#fff" : "#000" }]}
            placeholder="Enter OTP"
            placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
            keyboardType="numeric"
            maxLength={4}
            value={otp}
            onChangeText={setOtp}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDarkMode ? "#e74c3c" : "#b22222" }]}
            onPress={verifyOtp}
          >
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Back to Main Screen */}
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
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.5,
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
