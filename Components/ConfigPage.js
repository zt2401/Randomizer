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
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(text) => setText(text)}
          clearButtonMode="always"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => addItem()}>
        <Text style={styles.submitButtonText}> {buttonLabel} </Text>
      </TouchableOpacity>
      <View>
        <Text>{listName}</Text>
        {list}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
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
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
});

export default ConfigPage;
