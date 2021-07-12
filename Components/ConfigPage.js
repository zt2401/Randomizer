import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const ConfigPage = ({
  text,
  list,
  setText,
  addItem,
  placeholder,
  buttonLabel,
  listName,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={text}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor="#d4af37"
          autoCapitalize="none"
          onChangeText={(text) => setText(text)}
          clearButtonMode="always"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => addItem()}>
        <Text style={styles.submitButtonText}> {buttonLabel} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#d4af37",
    borderRadius: 10,
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#d4af37",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default ConfigPage;
