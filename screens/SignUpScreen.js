import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../context/ThemeContext";

const SignupScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  // State Variables
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Personal Details
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");

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
      // Alert.alert("OTP Verified", "You can now enter your details.");
    } else {
      Alert.alert("Invalid OTP", "Please enter the correct OTP.");
    }
  };

  // Handle Signup
  const handleSignup = () => {
    if (!name || !age || !gender || !bloodGroup || !city) {
      Alert.alert("Missing Fields", "Please fill in all details.");
      return;
    }

    console.log("Signup Successful!", { phoneNumber, name, age, gender, bloodGroup, city });
    navigation.navigate("ViewDonors");
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#ffffff" }]}>
      {/* Logo */}
      <Image source={require("../assets/Images/BloodLink.png")} style={styles.logo} />

      {/* Title */}
      <Text style={[styles.title, { color: isDarkMode ? "#ff4d4d" : "#c0392b" }]}>
        Sign Up for BloodLink
      </Text>

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

          <TouchableOpacity style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]} onPress={sendOtp}>
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

          <TouchableOpacity style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]} onPress={verifyOtp}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Personal Details Form (Only Show After OTP Verification) */}
      {isOtpVerified && (
        <>
          <TextInput
            style={[styles.inputContainer, { color: isDarkMode ? "#fff" : "#000" }]}
            placeholder="Full Name"
            placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={[styles.inputContainer, { color: isDarkMode ? "#fff" : "#000" }]}
            placeholder="Age"
            placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
            keyboardType="numeric"
            value={age}
            onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ""))}
          />

          <TextInput
            style={[styles.inputContainer, { color: isDarkMode ? "#fff" : "#000" }]}
            placeholder="Gender (Male/Female/Other)"
            placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
            value={gender}
            onChangeText={setGender}
          />

          <TextInput
            style={[styles.inputContainer, { color: isDarkMode ? "#fff" : "#000" }]}
            placeholder="Blood Group (A+, B-, O+, etc.)"
            placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
            value={bloodGroup}
            onChangeText={setBloodGroup}
          />

          <TextInput
            style={[styles.inputContainer, { color: isDarkMode ? "#fff" : "#000" }]}
            placeholder="City with Pincode"
            placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
            value={city}
            onChangeText={setCity}
          />

          <TouchableOpacity style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
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

export default SignupScreen;

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
