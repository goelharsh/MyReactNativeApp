import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`Hello, ${name}!`)}
      >
        <Text style={styles.buttonText}>Greet Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
});
