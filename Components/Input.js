import * as React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Input({ placeholder }) {
  const [text, onChangeText] = React.useState();
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
