import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { z } from "zod";

// Define the schema using Zod
const truckFormSchema = z.object({
  truckNumber: z.string().min(1, { message: "Truck Number is required" }),
  license: z.string().min(1, { message: "License is required" }),
});

type TruckForm = z.infer<typeof truckFormSchema>;

export default function GateOutSurvey() {
  const [truckNumber, setTruckNumber] = useState<string>("");
  const [license, setLicense] = useState<string>("");

  const isFormValid: boolean = truckNumber.length > 0 && license.length > 0;

  const handleSubmit = () => {
    const formData: TruckForm = { truckNumber, license };

    const validation = truckFormSchema.safeParse(formData);

    if (!validation.success) {
      const errorMessages = validation.error.errors
        .map((err) => err.message)
        .join("\n");
      Alert.alert("Validation Error", errorMessages);
      return;
    }

    Alert.alert("Success", `Truck Number: ${truckNumber}\nLicense: ${license}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <Text style={styles.label}>Truck Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Truck Number"
          value={truckNumber}
          onChangeText={setTruckNumber}
        />
        <Text style={styles.label}>License</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter License"
          value={license}
          onChangeText={setLicense}
        />
        <TouchableOpacity
          style={[styles.button, !isFormValid && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#aaa",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
